# Portfolio 2020 — Notes de projet

Dernière mise à jour : 24 septembre 2026.

## Usage du document

Base de travail évolutive pour préparer la page `/projets/portfolio-2020/`. Cette fiche organise les informations dictées par Erwan le 24 septembre 2026 et les éléments vérifiables dans le dépôt local du projet.

Elle ne constitue pas encore le texte final du portfolio. Les souvenirs qui diffèrent de l’état actuel du dépôt sont signalés et remis dans leur chronologie probable. La sélection des informations, leur rédaction publique et leur intégration à la page seront réalisées ensemble ultérieurement.

## Repères

| Élément | Informations recueillies |
| --- | --- |
| Projet | Portfolio personnel d’Erwan |
| Démarrage | Septembre 2020, confirmé par l’historique Git |
| Contexte | Début de carrière, avec un profil front-end plus junior qu’aujourd’hui |
| Objectif | Présenter le parcours, les compétences et les réalisations afin de soutenir la recherche de missions freelance |
| Framework | GatsbyJS 2 et React |
| Approche | Site statique dans l’écosystème Jamstack |
| Langues | Français, anglais et espagnol |
| Styles | Sass et Bulma, avec animations et effets d’interface |
| Contenu | Première version sans CMS selon le souvenir d’Erwan ; Netlify CMS ajouté ou expérimenté ensuite |
| Blog | Fonctionnalité développée dans une phase ultérieure, principalement visible dans l’historique Git de 2021 |
| Hébergement | Netlify selon Erwan ; intégrations Netlify présentes dans le dépôt |
| Usage professionnel | Portfolio utilisé pendant une période de missions obtenues sur Malt, avant une collaboration freelance durable avec Keyrus |
| Sources locales | `/Users/erwan/UNSYNC/portfolio2020` |
| Page du portfolio actuel | `/projets/portfolio-2020/` |

## 1. Un portfolio construit en 2020

Erwan réalise ce portfolio en 2020, au début de son parcours professionnel dans le développement front-end. L’historique Git confirme un démarrage le 29 septembre 2020.

À cette époque, il possède un profil plus junior qu’aujourd’hui et développe le projet sans l’assistance des outils génératifs et des modèles de langage désormais intégrés à son workflow. Le travail de conception, de recherche, d’écriture et de développement est réalisé manuellement avec les outils disponibles à cette période.

Le projet est intéressant aujourd’hui parce qu’il conserve une trace concrète de cette étape de sa carrière. Il permet de comparer ses méthodes, ses choix techniques et son niveau de maîtrise de 2020 avec ses réalisations actuelles.

## 2. Choix de GatsbyJS et de la Jamstack

Erwan choisit **GatsbyJS**, alors perçu comme un framework moderne et particulièrement visible dans l’écosystème des sites statiques et de la **Jamstack**.

Le dépôt confirme l’utilisation de :

- GatsbyJS 2 ;
- React 16 ;
- la génération d’un site statique ;
- Gatsby Image et les plugins de traitement d’images ;
- React Helmet pour les métadonnées ;
- un manifeste permettant certaines caractéristiques d’une application web installable ;
- Google Analytics via un plugin Gatsby.

Le positionnement de Gatsby comme technologie « tendance » ou « révolutionnaire » correspond au ressenti d’Erwan à cette époque. Pour la future page, cette idée pourra être formulée comme un choix représentatif de l’écosystème front-end de 2020.

## 3. Interface multilingue

Le portfolio est disponible en trois langues :

- français, langue par défaut ;
- anglais ;
- espagnol.

Le dépôt confirme l’utilisation de `gatsby-plugin-intl`, de fichiers de traduction JSON séparés et d’un sélecteur de langue dans les navigations desktop et mobile.

Cette fonctionnalité constitue un élément important du projet : elle montre la gestion d’une interface internationale, de contenus traduits et de routes adaptées, dans un portfolio destiné à présenter un profil travaillant avec plusieurs marchés.

## 4. Travail front-end et identité visuelle

Le projet utilise **Sass** pour l’organisation des styles et **Bulma** comme framework CSS. Ces deux choix, évoqués avec hésitation dans la dictée, sont confirmés par les dépendances et les fichiers du dépôt.

Le travail d’interface comprend notamment :

- plusieurs feuilles de styles Sass structurées par page et par composant ;
- une navigation desktop et mobile ;
- des cartes de projets ;
- une page de compétences ;
- une page dédiée à l’activité freelance ;
- un formulaire de contact ;
- des effets d’apparition au défilement ;
- des sliders et de petites animations ;
- des illustrations et icônes SVG intégrées sous forme de composants.

Ces éléments pourront servir à montrer les compétences front-end d’Erwan à une période où il construisait encore son expérience professionnelle.

## 5. Contenu, CMS et évolution du blog

Erwan se souvient d’un front-end multilingue initialement construit sans CMS. Le dépôt actuel contient néanmoins une configuration **Netlify CMS**, ainsi que les plugins Gatsby associés au Markdown et à la transformation des contenus.

L’historique permet de proposer la chronologie suivante :

1. le portfolio initial est commencé en septembre 2020 ;
2. les pages et traductions sont d’abord développées directement dans le projet ;
3. une fonctionnalité de blog et un travail d’internationalisation des articles apparaissent ensuite, principalement dans les branches et commits de 2021 ;
4. Netlify CMS est configuré pour gérer certains contenus et expérimenter l’édition du site.

Dans l’état actuel de la branche consultée, plusieurs liens de navigation dirigent vers `blog.erwanel.com`. L’historique Git contient toutefois de nombreuses traces explicites de développement du blog, d’articles multilingues et de coloration syntaxique.

Avant la rédaction finale, il faudra déterminer si la page doit présenter le blog comme une partie intégrée à une version du portfolio, comme un projet associé déployé séparément, ou comme une fonctionnalité développée puis déplacée. Il ne faut donc pas écrire que le projet n’a jamais utilisé de CMS.

## 6. Déploiement et services Netlify

Erwan indique que le portfolio était hébergé sur **Netlify**. Le dépôt contient plusieurs éléments cohérents avec ce déploiement :

- configuration de Netlify CMS avec une URL de site Netlify ;
- formulaire utilisant les attributs de traitement Netlify ;
- visuels et liens liés à Netlify CMS ;
- configuration du backend GitHub utilisé par le CMS.

Le domaine public mentionné dans la configuration Gatsby est `erwanel.com`. Les anciennes adresses de production, leur disponibilité actuelle et la relation entre le domaine principal, les sous-domaines linguistiques et Netlify restent à vérifier avant publication.

## 7. Rôle dans le parcours professionnel

Ce portfolio sert à Erwan pendant une période où il développe son activité freelance. Il lui permet de présenter ses compétences, ses projets et son positionnement de développeur front-end.

Erwan indique avoir trouvé plusieurs clients par l’intermédiaire de la plateforme **Malt** durant cette période. Il est ensuite recruté par **Keyrus** pour une mission freelance à temps plein et de longue durée afin d’accompagner leurs projets web.

La fiche Keyrus situe le début de cette collaboration en 2021. Le portfolio 2020 constitue donc un jalon entre la phase de développement des premières expériences freelance et l’entrée dans cette collaboration durable.

Il faudra rester précis sur le lien de causalité : le portfolio a soutenu la présentation professionnelle d’Erwan, mais aucun élément ne permet encore d’affirmer qu’il a directement déclenché chaque mission Malt ou le recrutement par Keyrus.

## 8. Une archive de l’évolution professionnelle

Ce projet n’est pas le premier portfolio réalisé par Erwan. Une version antérieure existe également et pourrait être présentée plus tard parmi les anciens projets. Le dépôt du portfolio 2020 contient d’ailleurs une capture nommée `oldportfolio.PNG`, ainsi que d’autres anciens travaux.

L’intérêt éditorial dépasse donc la simple présentation d’un ancien site. Plusieurs portfolios successifs peuvent rendre visible :

- l’évolution du niveau technique ;
- l’évolution des choix graphiques ;
- le passage d’un profil junior à un profil expérimenté ;
- les changements dans l’écosystème du développement web ;
- le passage d’un travail entièrement manuel à un workflow actuel pouvant inclure l’intelligence artificielle ;
- la continuité entre apprentissage, acquisition de clients et missions de plus grande ampleur.

Le portfolio 2020 pourra ainsi servir de repère dans une chronologie plus large des différentes périodes de la carrière d’Erwan.

## 9. Technologies et fonctionnalités confirmées

| Élément | Usage observé dans le dépôt |
| --- | --- |
| GatsbyJS 2 | Framework et génération du site |
| React 16 | Composants d’interface |
| JavaScript | Langage principal du front-end |
| Sass / SCSS | Organisation et écriture des styles |
| Bulma | Base CSS importée dans les styles Sass |
| `gatsby-plugin-intl` | Interface en français, anglais et espagnol |
| Netlify CMS | Configuration d’édition de contenus ajoutée au projet |
| Markdown / Remark | Infrastructure de transformation de contenus et travail lié au blog |
| Netlify Forms | Traitement du formulaire de contact |
| Netlify | Hébergement rapporté par Erwan et intégrations présentes |
| Gatsby Image / Sharp | Traitement et optimisation des images |
| React Helmet | Métadonnées et SEO technique |
| Scroll Reveal | Effets d’apparition au défilement |
| React Slick | Sliders et contenus défilants |
| Google Analytics | Mesure d’audience via le plugin `gatsby-plugin-gtag` |

## Chronologie de travail

| Période | Étape |
| --- | --- |
| 29 septembre 2020 | Premiers commits, ajout de Gatsby, Bulma, du layout, du header et du footer |
| Fin septembre et octobre 2020 | Construction des pages, de l’interface, des styles et des fonctions de présentation |
| Phase suivante | Mise en place des trois langues et enrichissement du contenu |
| Début 2021 | Travail sur le blog, les articles multilingues et l’édition de contenus |
| 2020–2021 | Portfolio utilisé pour présenter l’activité freelance et les réalisations |
| À partir de 2021 | Début de la collaboration longue durée avec Keyrus |

Les dates de mise en production et d’utilisation exacte sur Malt restent à préciser.

## Matière pour la future page — À sélectionner ensemble

Axes possibles :

- un instantané du développement front-end et de la Jamstack en 2020 ;
- un portfolio trilingue construit au début de la carrière freelance ;
- un projet qui montre les compétences disponibles avant l’usage courant des assistants génératifs ;
- un jalon entre les premières missions sur Malt et la collaboration durable avec Keyrus ;
- une archive permettant de montrer concrètement l’évolution des compétences et des méthodes.

La future présentation gagnera à assumer le caractère daté du design et des technologies. Cet écart avec le portfolio actuel constitue précisément une partie de son intérêt.

## Visuels et ressources disponibles

Le dépôt contient de nombreuses ressources exploitables ultérieurement :

- captures des pages et compétences ;
- captures de projets présentés à l’époque ;
- ancienne capture d’un portfolio précédent dans `src/data/images/projects/older/oldportfolio.PNG` ;
- logos Gatsby, React, Sass, JavaScript, Jamstack, Malt et autres outils ;
- illustrations SVG et éléments d’interface ;
- copie du CV de l’époque ;
- images liées au blog et aux projets.

Des captures fraîches pourront être réalisées si l’environnement peut encore être lancé. Il faudra également vérifier si une ancienne version déployée reste accessible.

## Points à enrichir au fil des prochains échanges

- Dates de conception, de mise en ligne et de retrait du portfolio.
- URL ou anciennes URL utilisées en production.
- Fonctionnement exact du blog et version dans laquelle il était intégré.
- Moment de l’ajout de Netlify CMS et contenus réellement administrés avec cet outil.
- Missions Malt obtenues pendant cette période et rôle éventuel du portfolio dans les prises de contact.
- Circonstances précises de la rencontre et du recrutement par Keyrus.
- Fonctionnalités ou éléments visuels dont Erwan était particulièrement fier à l’époque.
- Difficultés techniques rencontrées et apprentissages importants.
- Informations sur le portfolio encore antérieur et intérêt de le montrer.
- Choix des captures qui illustreront le mieux l’évolution entre 2020 et 2026.

## Journal

### 24 septembre 2026 — Première collecte

Création de cette fiche à partir de la dictée d’Erwan et d’une inspection ciblée du dépôt. Gatsby, React, Sass, Bulma, les trois langues, Netlify CMS, les intégrations Netlify et les travaux liés au blog sont confirmés. L’historique distingue un démarrage du portfolio en septembre 2020 et une phase importante de développement du blog en 2021. Aucun contenu de cette fiche n’est intégré à la page du portfolio actuel à cette étape.
