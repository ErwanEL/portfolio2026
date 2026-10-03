import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const port = 9333;
const targets = process.argv.slice(2).map((argument) => {
  const separator = argument.indexOf('=');
  if (separator === -1) throw new Error(`Argument invalide: ${argument}`);
  return { url: argument.slice(0, separator), output: argument.slice(separator + 1) };
});

if (!targets.length) {
  throw new Error('Utilisation: node scripts/capture-webpages.mjs URL=FICHIER [...]');
}

const chromeProcess = spawn(chrome, [
  '--headless=new',
  '--disable-gpu',
  '--hide-scrollbars',
  '--no-first-run',
  '--no-default-browser-check',
  `--remote-debugging-port=${port}`,
  '--user-data-dir=/tmp/portfolio-keyrus-profile',
  'about:blank',
], { stdio: 'ignore' });

const sleep = (duration) => new Promise((resolve) => setTimeout(resolve, duration));

async function getJson(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  return response.json();
}

async function waitForDebugger() {
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      await getJson(`http://127.0.0.1:${port}/json/version`);
      const page = await getJson(`http://127.0.0.1:${port}/json/new?about:blank`, { method: 'PUT' });
      if (page.webSocketDebuggerUrl) return page.webSocketDebuggerUrl;
    } catch {}
    await sleep(200);
  }
  throw new Error('Chrome DevTools indisponible');
}

function connect(webSocketUrl) {
  const socket = new WebSocket(webSocketUrl);
  let identifier = 0;
  const pending = new Map();
  const events = new Map();

  socket.addEventListener('message', ({ data }) => {
    const message = JSON.parse(data);
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) reject(new Error(message.error.message));
      else resolve(message.result);
      return;
    }
    const handlers = events.get(message.method) ?? [];
    handlers.splice(0).forEach((resolve) => resolve(message.params));
  });

  const ready = new Promise((resolve, reject) => {
    socket.addEventListener('open', resolve, { once: true });
    socket.addEventListener('error', reject, { once: true });
  });

  return {
    ready,
    send(method, params = {}) {
      identifier += 1;
      const id = identifier;
      return new Promise((resolve, reject) => {
        pending.set(id, { resolve, reject });
        socket.send(JSON.stringify({ id, method, params }));
      });
    },
    once(method) {
      return new Promise((resolve) => {
        const handlers = events.get(method) ?? [];
        handlers.push(resolve);
        events.set(method, handlers);
      });
    },
    close() { socket.close(); },
  };
}

try {
  const client = connect(await waitForDebugger());
  await client.ready;
  await client.send('Page.enable');
  await client.send('Runtime.enable');
  await client.send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 1000,
    deviceScaleFactor: 1,
    mobile: false,
  });

  for (const target of targets) {
    console.log(`Chargement: ${target.url}`);
    const loaded = client.once('Page.loadEventFired');
    await client.send('Page.navigate', { url: target.url });
    console.log('Navigation envoyée');
    await Promise.race([loaded, sleep(12000)]);
    console.log('Page disponible');
    await sleep(2500);
    await client.send('Runtime.evaluate', {
      awaitPromise: true,
      expression: `(async () => {
        const buttons = [...document.querySelectorAll('button')];
        const continueButton = buttons.find((button) => button.textContent?.includes('Continue to the Keyrus website'));
        if (continueButton) {
          continueButton.click();
          await new Promise((resolve) => setTimeout(resolve, 1800));
        }
        const refreshedButtons = [...document.querySelectorAll('button')];
        const rejectButton = refreshedButtons.find((button) => button.textContent?.trim() === 'No, thanks');
        if (rejectButton) {
          rejectButton.click();
          await new Promise((resolve) => setTimeout(resolve, 600));
        }
        document.querySelectorAll('[id*="axeptio_overlay"], [class*="axeptio_overlay"]').forEach((node) => node.remove());
        window.scrollTo(0, 0);
      })()`,
    });
    console.log('Écrans intermédiaires traités');
    if (process.env.PREPARE_ONLY === '1') continue;
    await sleep(2200);
    const screenshot = await client.send('Page.captureScreenshot', {
      format: 'jpeg',
      quality: 84,
      optimizeForSpeed: true,
      captureBeyondViewport: false,
      fromSurface: true,
    });
    console.log('Capture reçue');
    await mkdir(dirname(target.output), { recursive: true });
    await writeFile(target.output, Buffer.from(screenshot.data, 'base64'));
    console.log(`${target.output}`);
  }

  client.close();
} finally {
  chromeProcess.kill('SIGTERM');
}
