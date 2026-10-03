# circular.moda — Notes de projet

Dernière mise à jour : 24 septembre 2026.

## Usage du document

Base de travail évolutive pour préparer la page `/projets/circular-moda/`. Cette fiche organise les informations dictées par Erwan le 24 septembre 2026 et quelques éléments vérifiables dans le dépôt local du projet. Elle ne constitue pas encore le texte final du portfolio.

Les chiffres d’usage sont conservés comme un état déclaré au 24 septembre 2026. Ils devront être revérifiés avant leur publication sur le site. La sélection des informations, la rédaction publique et leur intégration à la page seront faites ensemble ultérieurement.

## Repères

| Élément | Informations recueillies |
| --- | --- |
| Nom | circular.moda |
| Nature | Marketplace de vente et d’achat de vêtements |
| Marché initial | Buenos Aires, Argentine |
| Équipe | Projet mené en collaboration avec un ami développeur |
| Rôle d’Erwan | Développement et participation au produit, à l’acquisition et aux automatisations ; répartition précise à compléter |
| Statut | Projet toujours en cours et en développement |
| Première version | MVP utilisant Airtable |
| Architecture actuelle citée | Next.js, Vercel et Supabase |
| Acquisition | Meta Ads et création de visuels publicitaires |
| Canal complémentaire | WhatsApp Business |
| Indicateurs déclarés | Plus de 1 000 publications et plus de 100 utilisateurs inscrits |
| Objectif actuel | Développer l’usage et créer une dynamique de marché avant d’activer progressivement des modèles économiques |
| Sources locales | `/Users/erwan/UNSYNC/MODACIRCULAR` |
| Page du portfolio | `/projets/circular-moda/` |

## 1. Origine et ambition du projet

circular.moda est un projet réalisé en collaboration avec un ami développeur. L’objectif est de créer une marketplace locale permettant d’acheter et de vendre des vêtements sur le marché de Buenos Aires, en Argentine.

Le projet cherche à réunir progressivement vendeurs, acheteurs et annonces pour produire une dynamique utile à tous les participants. Cette logique de réseau est décrite par Erwan comme la création d’une « synergie » sur le marché.

À terme, l’équipe souhaite expérimenter et mettre en place des modèles économiques. Ceux-ci ne sont pas encore détaillés ni présentés comme actifs. La priorité actuelle reste d’augmenter le nombre d’utilisateurs et l’activité de la plateforme.

## 2. Construction progressive et MVP

Le projet commence par une première version minimale utilisant **Airtable**. Cette étape sert de MVP avant l’évolution vers une architecture plus complète.

La chronologie précise, le fonctionnement de cette première version et les raisons détaillées du passage d’Airtable à Supabase restent à documenter. Il faudra notamment préciser ce qui était stocké dans Airtable et quelles limites ont conduit à faire évoluer le socle technique.

## 3. Architecture actuelle

Les technologies principales citées sont :

- **Next.js** pour l’application web ;
- **Vercel** pour le déploiement et l’exécution de tâches planifiées ;
- **Supabase** pour la base de données et l’authentification des utilisateurs ;
- **WhatsApp Business** comme canal intégré au parcours de publication, de contact ou de vente — usages exacts à détailler.

Le dépôt local confirme l’usage de Next.js, Supabase et de tâches cron Vercel. Les versions, l’architecture détaillée et la répartition des responsabilités entre les deux développeurs seront documentées ultérieurement.

## 4. Automatisation des publications Instagram

Une application Meta a été configurée afin de relier la plateforme à Instagram. Un système automatisé publie chaque jour des produits issus du catalogue sur le compte Instagram professionnel du projet.

Le dépôt documente le flux suivant :

1. sélectionner un produit éligible enregistré dans Supabase ;
2. utiliser son image principale et préparer la publication ;
3. publier le contenu par l’intermédiaire de l’Instagram Graph API ;
4. exécuter automatiquement cette opération grâce à un cron Vercel quotidien ;
5. conserver des informations permettant de suivre les publications déjà effectuées.

Cette automatisation vise à donner régulièrement de la visibilité au catalogue et à ramener des visiteurs Instagram vers la plateforme. Le volume de publications générées par ce système et son impact sur le trafic restent à mesurer ou à préciser.

## 5. Acquisition et communication

Le projet comprend également un travail d’acquisition avec **Meta Ads**. Erwan mentionne :

- la préparation de campagnes publicitaires ;
- la création d’images destinées aux publicités ;
- l’objectif d’attirer davantage d’utilisateurs sur la marketplace.

Les périodes de campagne, les audiences, les budgets, les créations utilisées et les résultats ne sont pas encore documentés. Il ne faut pas confondre cette activité avec Google Ads, qu’Erwan a explicitement corrigé pendant sa dictée.

## 6. État du projet et premiers indicateurs

Au 24 septembre 2026, Erwan indique que circular.moda compte :

- **plus de 1 000 publications** ;
- **plus de 100 utilisateurs inscrits**.

Le terme « publications » devra être clarifié avant la rédaction finale : il désigne probablement les annonces ou produits publiés sur la plateforme, mais pourrait inclure d’autres contenus. Les chiffres exacts et leur source devront être contrôlés au moment de leur intégration.

Le projet est toujours en cours. La plateforme, les canaux d’acquisition et les automatisations continuent d’évoluer. Il ne faut donc pas présenter ces chiffres ou l’architecture comme un état définitif.

## 7. Enjeu produit et modèle économique

L’enjeu actuel consiste à développer les deux côtés de la marketplace : attirer suffisamment de vendeurs et de produits pour intéresser les acheteurs, tout en attirant suffisamment d’acheteurs pour rendre la publication intéressante pour les vendeurs.

L’objectif à plus long terme est de mettre en place un ou plusieurs modèles économiques lorsque l’activité et la communauté le permettront. Aucun modèle précis n’a encore été indiqué dans cette collecte. Ne pas annoncer de commission, d’abonnement ou d’offre premium sans information complémentaire.

## 8. Technologies et outils cités

| Outil | Usage rapporté | État de la source |
| --- | --- | --- |
| Next.js | Développement de la marketplace | Cité par Erwan et présent dans le dépôt |
| Vercel | Déploiement et tâches planifiées | Cité par Erwan ; cron documenté dans le dépôt |
| Supabase | Base de données et authentification | Cité par Erwan et présent dans le dépôt |
| Airtable | Stockage ou gestion du premier MVP | Cité par Erwan ; périmètre à préciser |
| WhatsApp Business | Canal associé au parcours de la marketplace | Cité par Erwan ; intégration exacte à préciser |
| Application Meta | Autorisation et connexion à Instagram | Cité par Erwan et documenté dans le dépôt |
| Instagram Graph API | Publication automatisée de produits | Documentée dans le dépôt |
| Meta Ads | Campagnes d’acquisition | Cité par Erwan |
| Création visuelle | Images pour les campagnes publicitaires | Cité par Erwan ; outils utilisés à préciser |

## 9. Compétences et dimensions du projet

Cette réalisation pourra notamment illustrer :

- la construction progressive d’un produit numérique à partir d’un MVP ;
- le développement d’une marketplace avec comptes utilisateurs et catalogue ;
- une migration de données et de services d’un outil de prototypage vers un backend plus structuré ;
- l’intégration de services tiers comme Supabase, WhatsApp Business et les API Meta ;
- l’automatisation d’un canal éditorial et d’acquisition ;
- le travail sur un produit à effets de réseau ;
- l’expérimentation publicitaire et la création de contenus d’acquisition ;
- le suivi d’un projet entrepreneurial en évolution continue ;
- la collaboration technique avec un autre développeur.

La répartition exacte des contributions devra être précisée afin que la future page distingue clairement le travail d’Erwan du travail réalisé à deux.

## Chronologie de travail

| Phase | Étape |
| --- | --- |
| Première version | Création d’un MVP s’appuyant sur Airtable |
| Évolution technique | Développement sous Next.js et déploiement sur Vercel |
| Structuration du backend | Adoption de Supabase pour les données et l’authentification |
| Acquisition et opérations | Utilisation de WhatsApp Business, campagnes Meta Ads et création de visuels |
| Automatisation sociale | Application Meta, Instagram Graph API et cron quotidien de publication de produits |
| État au 24 septembre 2026 | Plus de 1 000 publications et plus de 100 inscrits déclarés ; projet toujours en développement |
| Prochaine étape générale | Continuer à accroître l’usage puis expérimenter les modèles économiques |

Les dates de démarrage et de chacune de ces étapes ne sont pas encore fournies. Certaines phases ont pu se chevaucher.

## Matière pour la future page — À sélectionner ensemble

Axes possibles :

- faire évoluer un MVP simple vers une marketplace structurée ;
- réunir développement produit, acquisition et automatisation des opérations ;
- construire un service local à Buenos Aires avec un autre développeur ;
- développer progressivement les deux côtés d’une marketplace avant sa monétisation ;
- montrer un projet vivant, déjà utilisé, dont le modèle continue d’être expérimenté.

La future page devra rester précise sur le stade du projet : premiers signes d’usage et volume réel, mais produit toujours en construction et modèle économique encore à définir.

## Visuels et ressources déjà disponibles

- Composition du logo : `src/components/CircularModaLogo.astro`.
- Capture de l’accueil : `public/images/projects/circular-home.webp`.
- Capture du catalogue : `public/images/projects/circular-catalogue.webp`.
- Métadonnées des captures : `src/data/projectScreenshots.ts`.
- Documentation Instagram dans le projet source : `/Users/erwan/UNSYNC/MODACIRCULAR/docs/instagram-product-publishing.md`.

Visuels complémentaires possibles : parcours de publication par WhatsApp, espace utilisateur, ajout d’une annonce, publication Instagram automatique, exemples de campagnes Meta Ads et comparaison entre le MVP Airtable et la version actuelle.

## Points à enrichir au fil des prochains échanges

- Date de démarrage du projet et principales étapes.
- Rôle de chacun des deux développeurs et responsabilités propres à Erwan.
- Fonctionnement exact du MVP Airtable et motif de la migration.
- Parcours complet d’un vendeur et d’un acheteur.
- Place précise de WhatsApp Business dans l’expérience.
- Définition du terme « publication » dans l’indicateur supérieur à 1 000.
- Source et date exacte des chiffres d’inscrits et de publications.
- Nature des campagnes Meta Ads, créations produites et résultats observés.
- Fonctionnalités majeures déjà disponibles sur la marketplace.
- Retours des utilisateurs et apprentissages produit.
- Modèles économiques envisagés, lorsqu’ils pourront être communiqués.
- Objectifs à court terme et critères permettant d’évaluer la progression du projet.

## Journal

### 24 septembre 2026 — Première collecte

Création de cette fiche à partir de la dictée d’Erwan. Les informations techniques sur Supabase et la publication Instagram quotidienne ont été recoupées avec le dépôt local. Les indicateurs de plus de 1 000 publications et plus de 100 utilisateurs inscrits restent des chiffres déclarés à vérifier avant publication. Aucun contenu de cette fiche n’est intégré à la page du portfolio à cette étape.
