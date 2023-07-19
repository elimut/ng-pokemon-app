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
Un site web au sens traditionnel est donc une application serveur qui envoie des pages HTML dans le nav du client à chaque fois qu'il le demande.
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
Paramètrage du socle de l'application qu'on va génèrer: options appliquées au projet sont --minimal = version allégée du socle, style à CSS pour le style.

Génère une architecture de dossiers, et cetains fichiers pour notre nouveau projet.
Notre projet se nomme ng-pokemon-app.

### Les fichiers générés par Angular CLI?

node_modules
src: sources du projet
app: code source
assets: images du projet ...
env: var d'env du projet
angular json: il contient la config d'angular cli. (skipt tests: génération des fichiers de test, ...)
package json: angula core = framework angular
tsconfig.app: config du **compilateur** TS pour le projet angular

### Le composant racine

Angular CLI a généré un premier composant.

src app app.components.ts
génération par défaut => 3 parties différentes:
import des éléments nécessaires pour le bloc suivant avec @component, décorateur qui permet de construire un composant web avec Angular.

L'annotation component doit être composée au minimum de 2 options:
**selector** => donne un nom au composant, dans page web balise app-root sera insérée. Elémént personnalisé. <app-root>, code valide, car Angular construit par dessus les composants web on peut donc personnaliser nos éléments HTML.
**template** => instruction qui définit le code HTML associé à ce composant web. Syntaxe **bactique**.
ES6 décrit une chaîne de caratère sans devoir concaténer avec +.
Double accolade qui permet d'afficher la valeur d'une propriété du composant.
La propriété du composant sont en dessous.
On décrit une prorpiété pour le composant AppComponent, il possède la valeur ng-pokemon-app, et ensuite Angular va être capable de pousser cette valeur dans le template au dessus.

**export** => qui permet d'exporter le composant pour le rendre disponible ailleurs dans l'application.

    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        template: `<h1>Welcome to {{title}}!</h1>`
        })
        export class AppComponent {
        title = 'ng-pokemon-app';
    }

### Le module racine

Regrouper les composants par fonctionnalités, par exemple ceux qui servent à l'authentification entre eux, ou tous ceux qui permettent de construire la fonctionnalité autour des pokémons.
Angular permet cela grâce aux modules, et tout nos composants sont regroupés au sein de modules.
**Dans tous les projets il y aura un fichier app.modules.ts qui est le module racine du projet**.
Tout partira du dossier app.modules.
Tout le reste de l'application sera construit dessus.

Le module racine est lancé automatiquement par Angular au démarrage de l'application, et depuis ce module on va piloter le reste du projet en disant que l'on veut bootstraper => déamrrer le composant app.component au démarrage de l'app (composant racine).

### Configurer TypeScript

Depuis la v11 d'Angular, le compilateur de Ts est plus stricte.
Simplement déclarer une prorpiété d'un composant devient pénible:

app.component

    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        template: `<h1>Welcome to {{title}}!</h1>`
        })
        export class AppComponent {
        title = 'ng-pokemon-app';
        <!-- décla de la propriété title --> si on veut lui attribuer un type on peut mettre String title: string ='nom'; aucun problème mais si à l'instant t, on ne connaît pas cette donnée et qu'elle vienne du serveur, si on init pas la propriété du composant title: string; => Angular va nous demander de faire => title: <string | undefined>; à terme vaudra string mais en même temps par défaut une var JS est undefined. On va indiquer que l'on veut du typage dans nos appli et bénéficier des avantages de TS mais on ne vaut pas ajouter undefined sur toutes les val qui viennent du serveur.
    }

=> tsconfig.json: sous option strict, on ajoute une option qui est **strictPropertyInitialization: false**.

### Démarrer une application Angular

Commande Angular CLI qui permet de compiler le projet, code TS, code Angular en code JS lisible par le nav.
On va pouvoir coder et Angular va rafraîchir le nav au fur et à mesure que l'on code.

**ng serve --open** => permet d'ouvrir le projet directement l'app Angular dans un nav.
Par défaut sur le **port 4200**.

ng serve

Compilation du projet et le voir depuis le nav.

 Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ => serveur de dév en live qui a démarré l'appli sur **http://localhost:4200/**.
 On voit le template de notre composant racine. C'est notre premier composant web.

ng serve tourne en fond et indique s'il y a des erreurs.

## Les composants web

### Qu'est ce qu'un composant

composant app.component: un composant est un système complétement encapsulé qui contrôle une portion de l'écran, cette portion de l'écran contrôlée par un composant = **une vue**.

la vue est définie dans le template du composant, la logique de la vue sera pilotée par la classe du composant qui est défini plus bas.

**Un composant web est une classe plus une vue**.
La logique du composant est défini dans la classe, tout ce qu'il faut pour faire fonctionner la vue. On y retrouve des propriétés et des méthodes, et dans le template c'est la vue en elle même qui est rendue à l'user.

Si maj dans la propriété, le template se met à jour. Et inversement, dans le template il peut y avoir des clics, ... on va avoir des événements qui vont partir du template et aller dans le composant.

**Les composants ont des cycles de vie**, ils naissent, sont modifiés et peuvent être tués.

### Les cycles de vie d'un composant Angular 

Chaque composant a un cycle de vie qui est géré par Angular (le retirer du DOM, ...). Nous avons la possibilité d'agir sur ses moments clés, au moment où ils se produisent grâce à des **interfaces**.
Elles sont disponibles dans le coeur du framework Angular et on y accès.

- Première méthode appelée par Angular est: **ngOnChanges**, lors de la création d'un composant, et à chaque fois qu'Angular détecte que les valeurs d'une propriété du composant sont modifiées afin de pouvoir les pousser directement et de les rendre disponible dans le template.
La méthode reçoit en paramètre un objet représentant les valeurs actuelles, et les valeurs précédentes disponibles pour le composant.

- **ngOnInit**: méthode appelée juste après le premier appel à ngOnChanges, initialise le composant dès qu' Angular a mis en place tout le binding avec le tempate.
Donc si on veut faire quelque chose au démarrage de notre application, c'est à cet endroit q'il faut agir.

- **ngDoCheck**: implémenter une interface pour étendre le comportement par défaut de ngOnChanges, afin de pouvoir détecter et agir sur des changements qu'Angular ne peut pas détecter lui même.

- **ngAfterViewInt**: appelée juste après la mise en place de la vue d'un composant (et des vues de son composants fils s'il en a).

- **ngOnDestroy**: méthode est appelée avant qu'Angular ne détruise et retire du DOM le composant.
Par exemple, naviagtion d'un composant à l'autre. (nettoyer mémoire)

Ces méthodes sont appelées en interne par Angular pour chacun des composants.

### Intéragir sur le cycle de vie d'un composant Angular

Implémentation de la logique d'initialisation d'un composant en interceptant la méthode ngOnInit.
Lorsqu'Angular initialise le composant, l'on viendra ajouter une instruction console.log sur la ppt.

Pour pouvoir intéragir avec le cycle de vie d'un composant mis en place par Angular, il faut importer l'interface OnInit, puis implémentation au niveau du composant.
Il faut définir la méthode associée à l'interface OnInit ngOnInit(). (ngNomDeLinterface)


### Gérer les intéractions utilisateurs

La capture de l'intéraction côté user se fait du côté template puisque c'est un événement.
Lorsqu'un User va déclencher un événement, la logique de ce qui se passera sera définie côté classe dans le composant.

On va créer une méthode select pokemon.

### Améliorer le composant racine

Injecter une liste de pokémons dans le composant, ça sera une liste de pokémon plus omplète, avec plus d'informations (id, types, pv,...),
Modifier la méthode selectPokemon, afin qu'elle ait un objet métier qui sera un pokémon,
Modifier le titre de l'application.
=> ajout d'un modèle pour venir modéliser ce qu'est un pokémon, le type d'un pokémon dans notre projet avec une interface TS (pokemon.ts)
Ajout d'un fichier mock de données pour simuler une liste de pokémons.

## Les templates d'Angular 

Les vues des composants, ils contiennet le code de l'interface user.


### Développer les tempaltes avec ES6

    template: `<h1>Liste de Pokémons</h1>`
    composant qui contient u titre pour afficher une liste de pokémons.
On va pouvoir ajouter des éléments grâce aux backtiq

    template: `<h1>Liste de Pokémons</h1>
    <p>Ceci est un paragraphe</p>
    `
Il y a dexu problèmes: si un composant à un template important, on va venir mélanger la partie vue et partie logique et le composant fera plus de 100 lignes.
Il faudrait séparer l'affichage et la logique du composant dans la classe ts dans deux fichiers séparés.
On écrit également un template dans une propriété, il faudrait un fichier dédié à l'affichage d'un template avec une extension HTML.

=> utilisation d'une propriété **template URL**.

### Développer les tempaltes avec Angular

templateUrl permet de passer l'URL vers le fichier du template => app.component.html pour décrire du template

Deux fichiers pour décrire le composant: un pour l'affichage en HTML et un qui est dédié à la logique TS.

### Découvrir l'interpolation

Permet à Angular d'afficher nos propriétés côté classe du composant dans le template.
On a la prpriété pokemonList, mais côté template elle n'est affichée nulle part.
L'on va utiliser l'interpolation pour afficher la liste des pokemons par leurs noms.
L'ajout d'interpolation pousse les propriétés vers le template.
Interpolation ne marche pas sur des objets. Cela fonctionne sur des valeurs simples, types primitifs mais n'affiche pas des iterables (tableaux, objets).
Ca n'est pas le seul moyen de pousser des données du composant vers le template.

### La syntaxe de liaison des données

Il existe plusieurs manières de pousser les données de la classe du composant vers le tempalte.

- **Propriété d'éléments**: <img [src]= "someImageUrl"> => on utilise les [] pour lier directement la source de l'image à la propriété du composant someImageUrl, ou <img src="{{ someImageUrl }}">, on retire les crochets sources et on utilise à l'intérieur des accolades l'interpolation.
- **Propriété d'atributs**: <label [attr.for]= "someLabelId"> ... </label> => élément attr.nom attribut de l'élément label ue l'on veut lier avec la propriété passée entre les accolades.
- **Propriété de la classe**: <div [class.special]= "isSpecial">Special</div> => pour attribuer ou non la classe special à l'élément div. Lier des classes des éléments HTML, dynamique.
- **Propriété de style**: <button [stye.color]="isSpecial?`red`:`green`">Special</div> => lier le style css en les pilotants depuis la classe du composant. opérateur ternaire lié à la propriété du composant isSpecial.

Tout ces mécanismes permettent uniquement de pousser des données de classe du composant vers le template, mais pas dans le sens inverse.
Si événements côté template, il faut pouvoir les remonter du côté de la classe.

### Gérer les intéractions utilisateur

Intercepter les événements qui pourraient se produire côté template.
Toutes les actiohns types clic, ..., vont lever des événements dans le DOM (représentation structurée de la page HTML où chaque balise HTML représente un noeud, arbre qui représente la page web) avec lequel on voudrait pouvoir interagir.
Il faut lier n'importe quel événement du DOM à une méthode côté class du composant, en utilisant la syntaxe de liaison d'événements d'Angular.

Syntaxe pour écouter un événement avec Angular est simple:
côté template => (nomEvent) et lui passerla méthode de la class du composant qu'on veut exécuter.
app.component.html

    <p (click)="selectPokemon(pokemonList[0])">{{ pokemonList[0].name }}</p>
    <!-- clic appel méthode selectPokemon -->

### Intercepter tous les événements du DOM

Intéraction avec l'objet event qui est remonté par le DOM et qui est un objet natif.
L'on pourra intéragir avec n'importe quel type d'évent sur n'importe quel noeud du DOM.
, on va rajouter un champ input où l'user peut ajouter un nombre qui sera l'index du pokémon auquel il veut accèder.

### Les variables référncées dans le template

Peu agréable de travailler avec $event, et Angular propose une autre fonctionnalité qui permet de déclarer des variables locales dans le template. Elles nous garantissent un accès direct sur l'élément du DOM depuis le template.
Ca évite de caster l'élément du DOM sur lequel a lieu l'événement.

Dans le template on peut déclarer ds variables, grâce à #.
app.component

#input, on peut avoir accès à cet élément sans avoir à caster des choses dans la logique de la vue.


    <input 
        #input
        (keyup)="0"
        //event qui pousse ce qui est tapé par l'user, pousse la valeur dans l'interpolation <p>input.value. 0 pour ne pas exécuter le code à ce moment là, juste mise à jour côté template par angular.
        type="number"
        (click)="selectPokemon($event)"
    />
    <!-- !$event-- event remonté par le DOM, , erreur car selectPokemon accepte un pokémon => changer contrat -->
    <!-- #input déclaration de variable référencée dans le template -->
    <p>{{ input.value }}</p>
    <!-- interpolation pour afficher directement le contenu tapé par l'user -->

Permet d'avoir directement accès à l'objet du DOM input et intéragir avec.
Evite le cast.

### Créer un flux de données bidirectionnel

Construire une petite interface pour que l'user sélectionne un nombre et on lui indique le pokémon choisi.

    pokemonSelected: Pokemon;
  // prop de type Pokemon, choisie par user

A chaque fois que l'user va taper une touche dans le champ input, on va garder la variable référencée dans le template #input, et on va intercepter l'event keyup.

Plus d'event à intéragir sur selectPokemon mais un id de pokémon.

    <p>{{ pokemonSelected?.name }}</p>
    <!--à l'init du composant pokemonSelected n'est pas défini donc =undefine, on dmd à accèder à la prop name undefined => erreur => ? si n'est pas déf n'affiche rien-->

Il faut:
- arrêter de raisonner en index dans le tableau pour l'user 1 = Bulbizarre,
Quand il tape un id, pas index => id.
    selectPokemon(pokemonId: string) {
        const id = +pokemonId;
        const index =id +1;
        // réup l'identifiant et pas index
        console.log(`Vous avez cliqué sur le pokémon ${this.pokemonList[index].name}`);
    }
=> chercher dans le tableau celui qui a l'id qui correspon à ce que l'on cherche. On va donc chercher le pokemon dont on a besoin avec find de JS.

### Détecter l'appui sur la touche entrée

Actuellement saisi chiffre lance la recherche et touche entrée on lui envoie les informations du pokémon remonté.
Angular permet de filtrer les event du clavier:
on peut écouter uniquement la touche entrée en utilisant un pseuod event qui s'appelle keyup.enter. On en remonte que l'événement au template lors de la touche entrée.
On peut slectionner les event que l'on veut écouter au niveau du template = **pseudos événements**.

### Conditionner un affichage avec ngIf

Comment conditionner l'affichage dans le template.
Si aucun pokémon => affichage d'autre chose = **ngIf**.

    <p *ngIf=""> 
        Vous avez sélectionné le pokémon: {{ pokemonSelected?.name }}
    </p>
    * indique à angular que l'on a mis en place une directive structurelle.
ngIf prend une condition en paramètre. Elle vient généralement de la class du composant.

    pokemonSelected: Pokemon | undefined;
    true | false

    <p *ngIf="pokemonSelected"> 
        Vous avez sélectionné le pokémon: {{ pokemonSelected?.name }}
    </p>
Affichage ou non dans la vue en fonction de la propriété.

Angular retire du DOM l'élément. 
On peut piloter l'interface depuis le composant web.

        <p *ngIf="pokemonSelected"> 
        Vous avez sélectionné le pokémon: {{ pokemonSelected?.name }}.
    </p>
    <p *ngIf="!pokemonSelected"> 
        Aucun pokémon n'a été trouvé pour le moment.
    </p>

**Cration de templates conditionnels**.

### Afficher une liste avec ngFor

Autre directive structurelle: **ngFor**, boucle sur des tableaux pour afficher les éléments du tableau.

    <p>{{ pokemonList[0].name }}</p>
    <p>{{ pokemonList[1].name }}</p>
    <p>{{ pokemonList[2].name }}</p>
    <p>{{ pokemonList[3].name }}</p>
    <p>{{ pokemonList[4].name }}</p>
    <p>{{ pokemonList[5].name }}</p>
    <p>{{ pokemonList[6].name }}</p>
    <p>{{ pokemonList[7].name }}</p>
    <p>{{ pokemonList[8].name }}</p>
    <p>{{ pokemonList[9].name }}</p>
    <p>{{ pokemonList[10].name }}</p>
    <p>{{ pokemonList[11].name }}</p>

        <p *ngFor="let pokemon of pokemonList">
        {{ pokemonList[0].name }}
    </p>
    <!-- directive structurelle *, tableau doit venir de la classe du composant -->
Elles sont disponibles automatiquement dans tous les templates de l'application, car elles sont ajoutées par le module racine browser module.

Quand on créerra nos propres modules, on veillera à importer à l'intérieur un autre modul qui s'appelle **Common module**, et qui met à dispodition des directives.

### Exercice: modifier le template de l'application

Materialize, biblioth_que CSS.
Ajout de Materialize dans HTML: 
[materialize](https://materializecss.com/getting-started.html)
On a ainsi les classes CSS disponibles dans les templates.

Comment mettre les classes de materialize ensemble avec la librairie ngFor

## Les directives

### Qu'est ce qu'une directive?

C'est une classe Angular qui ressemble beaucoup à un composan, sauf qu'elle n'a pas de template.
La class component hérite de la class directive.
Au lieu d'annoter notre classe directive avec @component, nous allons utiliser @directive.
**Elle permet d'intéragir avec des éléments HTML d'une page en leur attachant un comportement spécifique**.
Il peut y avoir plusieurs directives appliquées à un élément.
Elle possède un sélecteur CSS qui indique au framework où l'activer dans le template.
Lorsqu'Angular trouve une directive dans un template HTML, il instancie aussi la classe directive correspondante et donne à cette instace le contrôle sur la portion du DOM qui lui revient.

Il en existe trois types:
- **les composants**: app.component.ts est une directive,
- **les directives d'attributs**: elles peuvent modifier le comportement des éléments HTML, des attributs, des propriétés et des composants. Elles sont représentées habituellement par des attributs au sein des balises HTML.
- **les directives structurelles**: responsables de la mise en forme d'une certaine manière les éléments HTML de notre page en ajoutant, retirant, ou manipulant des éléments et leurs fils (exemple ngIf, ngFor,...).

### Créer une directive d'attribut

Cela va nous permettre de changer l'apparence ou le comportement d'un élément.

BorderCardDirective => bordure de couleur au survol du curseur et hauteur sur la card.
Avec Angular CLI: 
ng generate directive border-card

REATE src/app/border-card.directive.ts (149 bytes)
UPDATE src/app/app.module.ts (1302 bytes)
A déclaré dans les modules, et importé.
border-card.directive.ts => @directive


