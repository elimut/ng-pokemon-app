# AngularJS_Application_NodeJS

 Frontend en Angular pour API REST NodeJS Angular

## Ce que vous allez apprendre

Créer une application Angular complète à partir d'un dossier vide
Développer un système de navigation entre composants
Ajouter des formulaires pilotés par le template et par le modèle
Effectuer des requêtes HTTP depuis son application
Mettre en place un système d'authentification
Déployer une application Angular en production

## Présentation d'angular

C'est un framework = cadre de travail.
C'est un outil qui permet de travailler de manière plus efficace et organisée.

## Site web ou application web

Séparation partie cliente du site interprétée par le nav(js, HTML, CSS) et celle de la partie serveur (PHP, Java).
Un site web au sens traditionnel est donc une application serveur qui envoie des pages HTML dans le naav du client à chaque fois qu'il le demande.
Quand l'user navigue sur le site, et change de page, il faut faire une requête serveur... couteux, plus simple avec JS.
Une application web est différente et correspond à ce besoin, il s'agit une page HTML qui contient suffisamment de JS pour fonctionner en autonomie une fois que le serveur l'a envoyée au client. Une seule page est envoyée par le serveur pour l'ensemble du site, puis le JS prend le relais pour gérer la nav en affichant ou masquant des éléments HTML => plus rapide, pas de rechargement de toute la page = architecture **ESPA** = single page applications.

## Angular vs AngularJS

Développement de grosses applications, développé par Google.

- Les contrôleurs: l'architecture mvc est remplacée par une architecture réctive à base de composants web,
- Les directives: retirées remplacés par les comosants, les directives d'attributs et les directives structurelles,
- Le $scope: simplifié et la nécessité d'injestcer des scops a été retiré,
- Les modules: remplacés par les modules natifs de ES6,
- jQlite: retirée,
- Le two-way_data_binding:retirée.

## Pourquoi Angular?

2014 réecriture du framework, AngularJS plus maintenu à partir de 2018.
Evolution du web: web components, ES6, meilleures performances

## Philosophie

Framework orienté composants.
Un composant est l'assemblage d'un morceau de code HTML et d'une classe JS dédiée à une tâche particulière.
Les composants reposent sur le standard des web components:
Non supporté par tous les nav.
Découpe la page web: barre de nav, contenu principal.
Un composant est une partie qui fonctionne de manière autonome dans une application.

Angular est construit par dessus TypeScript ce qui permet de typer les variables même écrite en JS.
Construit par dessus la dernière version de JS ES6.
Construit par dessus le standard des composants web qui permet d'encapsuler du HTML, du CSS et du JS qui va fonctionner de manière indépendante par rapport au reste de la page.

## Premiers pas avec Angular

### Les outils du développeur angular

- moteur d'exécution NodeJS et le gestionnaire de paquet NPM,
- IDE,
- outil en ligne de commande = angular CLI, qui permet d'accèlérer le développement avec Angular. Avec des lignes de commande, l'on va pouvoir génèrer notre projet ou un squelette de composant.

### Installation de NodeJS et NPM

NPM = Node Module Packager.

NodeJS permet d'exécuter du code JS côté serveur et NPM permet d'installer et de gérer lezs dépendances de paquet JS comme Angular, qui est un paquet JS.

Installation de NodeJS => installation automatique de NPM par défaut.
[NodeJs](https://nodejs.org/en)

node -v
npm -v

### Démarrer un nouveau projet

Installation Angular CLI qui permet de mettre en place tout un projet AngularJS avec la configuration de TypeScript en une ligne de commande.
On va pouvoir piloter certaines fonctionnalités de Angular directement depuis le terminal.
Il sert pour tout les projets avec Angular.

### Installer Angular CLI

npm install -g @angular/cli => -g installe en global sur la machine, l'outil sera à disposition pour tous les projets. (ne pas oublier npm init)
paquet NPM

ng version

### Générer une application Angular

Angular CLI dispose d'une commande pour génèrer le socle de l'application.

**ng new ng-pokemon-app --minimal --style=css**
Paramètrage du socle de 'application qu'on va génèrer: options appliquées au projet sont --minimal = version allégée du socle, style à CSS pour le style.

Génère une architecture de dossiers, et cetains fichiers pour notre nouveau projet.
Notre projet se nomme ng-pokemon-app.

### Les fichiers générés par Angular CLI?

node_modules
src: sources du projet
app: code source
assets: images du projet ...
env: var d'env du projet

