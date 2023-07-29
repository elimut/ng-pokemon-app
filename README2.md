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
- Les directives: retirées remplacés par les composants, les directives d'attributs et les directives structurelles,
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


    import { Directive } from '@angular/core';

    @Directive({
        selector: '[appBorderCard]'
        })
        export class BorderCardDirective {

        constructor() { }

    }

On va réupèrer l'élément qui vient du DOM dans le constructeur de la directive, pour intéragir avec l'élément sur lequel est appliqué la directive.
Ici récupèrer la carte pour ajout de la bordure en hover.

### Prendre en compte les actions utilisateurs

Mettre en place la directive lors du hover:
- détecter lorsque le curseur entre ou sort de la liste,
- définir une action pour chacun des deux événements.

=> **@HostListener**, cette annotation permet de lier une méthode de la directive à un événement donné.

On va créer deux nouvelles méthodes dans notre directive.
mouseEnter et mouseLeave.

Ajout dans les importations HostListener, nous allons l'utiliser pour écouter les événements.

### Utiliser la directive

Il faut appliquer la directive dans template du composant.
app.component.html

### Ajouter un paramètre à la directive

Notre directive n'est pas personnalisable à chaque usage (couleur unique).
Quand un user appelera cette directive dans un template, il sera possible de personnaliser la couleur.

L'on veut préciser une propriété d'entrée pour la directive avec la notation **@input**.*L'on va ajouter une propriété borderColor pour paramètrer la couleur des bordures.

import input depuis la librairie angular core.
sous le constructeur nous allons déclarer une nouvelle propriété border color avec input.

    @Input("appBorderCard") borderColor: string;
app.Component.html => appBorderCard="red" indiquer bordure rouge

npm start

**alias**: il existe deux manières de déclarer une propriété d'entrée, avec ou sans alias.
sans alias, obligation d'utiliser le nom de la directive pour nommer la propriété, mais pas adapté.
Grâce à l'alias l'on peut nommer la ppt de la directive comme souhaité, il faut spécifier le nom de la directive dans l'argument @Input.

### Améliorer notre directive de notre directive d' ttribut

Remplacer les valeurs codées en dur par des propriétés:
- initialColor = affichée au chargement de la page,
- defaultColor = défaut si aucune couleur de bordure n'a été précisée par l'user dans le template,
- defautHeight.

## Les pipes

Grâce à l'interpolation, l'on peut afficher les données dans les templates.
Mais parfois, les données récupérées ne peuvent pas être affichées à l'user.
(date)

Il faut formater l'affichage.
Il faut parfois appliquer les mêmes transformations dans plusieurs templates différents.
=> **pipes**.

### Utiliser un pipe

Affichage de date formatée pour l'user
    <p><small>{{ pokemon.created }}</small></p>
    ajout du pipe date, l'on place l'opérateur à droite de la propriété que l'on souhaite transformer: | suivi du nom du pipe que l'on souhaite utiliser.

    <p><small>{{ pokemon.created | date }}</small></p>
Affichage par défaut.

### Les pipes disponibles par défaut

DatePipe,
UpperCasePipe,
CurrencyPipe (affichage des devises),
...
[angular pipes](https://angular.io/guide/pipes)

### Combiner plusieurs pipes

Utiliser plusieurs pipes différentes pour une même propriété:

    <p><small>{{ pokemon.created | date | uppercase }}</small></p>

**Les transformations des pipes s'appliquent de la gauche vers la droite.**

### Paramètrer un pipe

Utilisation plus poussée.
On peut leurs passer des paramètres.
On va passer un paramètre au pipe date:

    <p><small>{{ pokemon.created | date:"dd/MM/yyyy" }}</small></p>

### Créer un pipe personnalisé

Création d'un pipe pokemonTypeColor pipe => renvoie une couleur correspondant aux types du pokémon.
On va demander à Angular CI de génèrer le pipe.

ng generate pipe pokemon-type-color 

CREATE src/app/pokemon-type-color.pipe.ts (237 bytes)
UPDATE src/app/app.module.ts (1395 bytes)

    import { Pipe, PipeTransform } from '@angular/core';

    @Pipe({
        name: 'pokemonTypeColor'
        })
        export class PokemonTypeColorPipe implements PipeTransform {

        transform(value: unknown, ...args: unknown[]): unknown {
            return null;
        }

    }

### Les routes

L'application ne possède que d'un composant, accessible par défaut au démarrage.
L'on va doter notre application d'un système de naviagtion.
Avec Angular lors de la simulation, on peut revenir en arrière avec le bouton du nav.
Les routes d'une application doivent être regroupées par grandes fonctionnalités au sein de modules.
Exemple pokémons ensemble, authentification inscription ensembles.

### Le fonctionnement

Il faut au moins deux composants.
Celui qui affiche les pokémons => /pokemons, et un pour rediriger vers le pokémon choisi => /pokemon/1 et un bouton retour.
 
Création d'un composant liste pokémon et  détail-pkémon-component.

### Génèrer deux nouveaux composants

Dans le app.component.ts on crée les deux nouveaux composants.

ng generate component list-pokemon --inline-template=false
pour avoir le template à part, on surcharge avec inline => htmel et ts

CREATE src/app/list-pokemon/list-pokemon.component.html (27 bytes)
CREATE src/app/list-pokemon/list-pokemon.component.ts (195 bytes)
UPDATE src/app/app.module.ts (1499 bytes)

On va pouvoir travailler sur le routing.

### Créer des routes

On va commencer par déclarer les nouvelles routes dans app-routing.module.ts, on y déclare les deux routes des comosants créés et une route par défaut, lorsque l'user v charger l'application pour la première fois, il va charger une URL vide qui va arriver à la racine du projet.
Les routes se déclarent comme un objet avec une option chemin qui est l'URL associé à un  composant.

pathMatch? effet de bord

Toujours déclarer les routes le splus spécifiques en haut et globales en bas acr écrase les déclarations de routes en dessous.

### La balise <router-outlet>

Pour commencer, côté template dans le composant racine il manque un élément => **router-outlet** qui permet de relier les routes qu'on a définies avec le template.

Chaque fois que l'URL bouge dans le nav, Angular, récupère le composant associé et le palce à la place de la balise.

    <router-outlet></router-outlet>
app.component.html => est le composant qui va venir contenir les composants fils qui seront ajoutés dedans. Il est considéré comme le pére du composant.

Par défaut, il va charger le composant racine, mais dans router outlet, il va venir injecter le contenu du composant qui correspond à l'URL.

### Modifier le composant de la liste des pokémons

La liste de pokémons est écrite dans le composant racine en dur.
On va mettre le code dans le template list pokemon.
Ce template est lié à une classe de composant pour récupèrer la liste de spokémons puisque la vue est construite ainsi. Mais dans la classe list pokémon, on a pas déclaré de pokemon list.
Récupèrer la liste dans la logique app.

### Dynamiser le composant de détail d'un pokémon

Partie logique:
récupèrer l'id du routeur, et chercher dans la liste le pokémon demandé => on va utliser le routeur d'angular, puis le pousser dans le template.
On va passer par le constructeur.
Pour injecter le service pour piloter les routes, afin d'accèder à l'id qui est dans la route.
A l'init, l'on va chercher l'id dans l'URL:

    const pokemonId: number = this.router.snapshot.paramMap
    snapshot => obtenir la donnée à l'instant T, des paramètres transmis sous forme d'une paraMap(tableau).

ActivatedRoute renvoie string ou null or pokemonId.

### Brancher le template de détail d'un pokémon

Voir detail-pokemon.component.ts

### Ajouter une barre de navigation

app.component.html

On remplace le titre par une barre de nav.

### Gestion de la navigation

Naviguer grâce au service router.
Clic retour et clip card.

detail-pokemon => retour interception event clic

### Gestion des erreurs 404

Si URL non définit dans le dossier routes => application saute.
Il faut afficher un message d'erreur à l'user.

ng generate component page-not-found (fichier template avec != false)

Interception des erreurs potentielles et rediriger toutes les URL qui n'existent pas vers ce composant chargé de gérer les erreurs.
Dans le fichier de déclaration des routes => utilisation d'un opérateur ** qui va permettre d'intercepter toutes les routes au sein de l'application.
Il intercepte toutes les routes, Angular lit les routes du haut vers le bas, 404 en haut => message d'erreur. 

## Les modules

Comment créer un nouveau module pour l'app, pour mieux organiser le code.
Module pour la gestion des pokémons.

Les applications Angular sont modulaires, et elles possèdent leurs propre système de module.
Chaque app possède au moins un module = module racine, qui est nommé app module par convention.

Application > Root Module > feature Module A
                          > feature Module B

Il peut suffire pour de petites application, mais souvent l'on a besoin de plusieurs modules, ce sont des modules de fonctionnalités.
Pour chaque modalité dans le projet, l'on va ajouter un nouveau module. Les modules de fonctionnalités sont un ensemble de classe et d'éléments dédiés à un domaine spécifique de l'app.
Un module est toujours une classe avec le décorateur @NgModule, il prend en paramètre un objet avec des propriétés qui décrivent le module.
Il y a en tout 5 propriétés declarations, ce sont les classes de vue qui appartienent à ce module.
Angular a trois types de vues: les composants, les directives et les pipes, il faut toutes les déclarer.
Il existe une option export, c'est un sous ensemble des déclarations qui doivent être visibles et utilisables dans les templates de composants d'autres modules.
Import = toutes les classes exportées depuis d'autres modules dont on a besoin dans ce module, nécessaires au fonctionnement du module.
Providers = cette propriété concerne les services et l'injection de dépendances que nous traiterons plus tard.
Bootstrap = cette propriété ne concerne que le module racine, il faut y renseigner le composant racine app, celui affiché au lancement de l'application.
Js a son propre système de module qui est sans rapport avec celui d'Angular, en JS chaque fichier est un module et tous les objets définis dans ce fichier appartiennet au module.
Il déclare certains objets public, en les déclarant avec export. D'autres modules Js utilise import pour accèder à ces objets.
Les systèmes de modules d'Angular et Js sont différents mais complémentaoires,; nous utilisons les deux pour écrire nos applications.

### Créer un module

Création d'un module permettant de centraliser tous les élements qui concernant la gestion des pokémons dans l'app.

ng generate module pokemon

L'on a pas de update car Angular ne saît pas ou créer ce fichier.

L'on va pouvoir venir y centraliser toutes la gestion des pokémons, et venir le déclarer ici plutôt que dans le module racine.
On va y brancher tous les élements: composant list, le détail, le pipe, directive, le modèle pokemon et le mock.
On va déclarer les routes utilisées par le module plutôt que de passer par les rouites racines.

Par défaut, l'on a la route 404, Angular n'intercepte que celle-ci.
Voir déclarations des routes:
app.module chargé en prmeier => on voit dans les imports que l'on charge d'abord les routes de app-routing.

      imports: [
        // déclaration ds éléments nécessaires au module mais qui sont d'autres modules 
        BrowserModule,
        AppRoutingModule,
        PokemonModule
    ],
route vide redirect pokemons directement interceptée par **, 404. Les routes sont séparées par deux fichiers, on a app-routing en premier puis charge pokemonModule.

        BrowserModule,
        PokemonModule,
        AppRoutingModule


### Structurer l'architecture de l'application

Il est plus simple de définir à l'avance l'architecture de l'application.

Comment sera struturée l'application finale?
Actuellement l'on a deux modules => AppModule et un sous module pour gérer les PokemonModule.

L'on veut mettre en place un gestionnaire pour la connexion.
L'espace privé de l'user sera géré dans le module PokemonModule dans lequel l'on pourra ajouter les éléments nécessaires.
Mais l'on mettra dans le module racine un composant loggin pour que l'user puisse se connecter. Cette feature n'est pas relative à la gestion des pokémons.
**Quelles features dans quels modules!**

## Les services

Enrichissement avec des services.
Les composants lsit et detail vont avoir besoin d'accèder aux pokémons et d'effectuer des opérations dessus. L'on va centraliser ces opérations et données dans un **service**. Ce service sera utilisable pour tous les composants du module pokémon afin de leurs fournir un accèset des méthodes pour la gestion des pokémons.

### Créer un service

Fournir des données et des méthodes de gestion des pokémons à tous les composants du PokemonModule.

Objectif?
Masquer à nos composants la façon dont on récupèrer les données et le fonctionnement interne de certaines méthodes, on peut factoriser des comportements communs à certains composants.

ng generate service pokemon/pokemon mais dans le module Pokemon (pokemon nom du dossier) et nom service

ng generate service pokemon/pokemon --dry-run indique ce qu'angular cli aurait fait si l'on exécute la cmd.

pokemon.service.ts

@injectable = décorateur
permet d'indiquer à Angular que notre service peut lui même avoir d'autres dépendances. Pour brancher ce service avec le mécanisms d'injection de dépendances d'Angular.
Utilisable ailleurs dans l'appli, dans les constructeurs des comoposants et importer d'autres services dans le service.

@injectable est caché dans @component, @pipe, ...

    import { Injectable } from '@angular/core';

    @Injectable({
        // décorateur permet d'indiquer à Angular que notre service peut lui même avoir d'autres dépendances. Pour brancher ce service avec le mécanisms d'injection de dépendances d'Angular.
        providedIn: 'root'
        // cette ppt indique à Angular que l'on veut utiliser la même instance du service à travers toute l'app. Nous ne créerons jamais d'instance nous même
        })
        export class PokemonService {

        constructor() { }
    }

On va donc pouvoir créer un service avec des méthodes qui serviront ailleurs dans l'application.
Cela déchargera les composants, en utilisant les méthodes écrites dans le service.
Utilisable par list et detail.

getPokemonList => renvoie liste des pokémon
getPokemonById(id)
plus une méthode outil getPokemonTypeList pour la lsite des types autorisés.

### Consommer un service

Comment utiliser le service créer => injection dans les composants list et detail et essayer voir comment on peut s'en servir pour allèger le code des composants.

Ne jamais le créer comme un simple objet dans le constructeur avec new => 
le composant ne saît pas comment créer le pokemonService, il faudrait maj le constructeur constamment en cas de changement du service,
création nouvelle instance avec new, donc on perd le mécanisme qu'Angular garantit que l'on a qu'une instance du service dans le projet,
lors du développement d'un service, le consommateur du service, le composant ne doit pas se demander comment fonctionne le service à l'intérieur.

    constructor(
        private router: Router,
        private pokemonService: PokemonService
    ) {}
    Récupération d'une instance unqiue du PokemonService

Il faut maintenant l'utiliser, lorsque l'on initialise la liste des pokémons => pokemonList: Pokemon[] = POKEMONS;  retirer et passer par le service.
En cas de changement on aura que la méthode à changer.

### Linjection de dépendance

Nous verrons également comment délmimiter un espace dans notre application depuis lequel le service sera disponible.
Angular dispose de son propre framework d'injection, et on ne peut pas vraiment développer une applicaiton sans cet outil.

**L'injection de dépendances est en fait un modèle de développement ou design pattern , dans lequel chaque classe reçoit ses dépendances d'une source externe plutôt qu'en les créant elle-même.**
Le framexork d'injection possède un injecteur, dans ce cas on l'utilise pour gérer les dépendances de nos classes sans s'occuper de les gérer.
main.ts:

    platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
    // injecteur créé par angular à l'échelle de l'app pendant le process de démarrage
Par contre, l'on doit enregistrer des fournisseurs pour rendre disponible le service là où nous en avons besoin: module, composant, application.

### Fournir un service au niveau de l'application

Parfois l'on a besoin de rendre un service disponible au niveau de l'ensemble de l'application.
Si on se rend côté code dans le service PokemonService fait: 

    providedIn: 'root'

On fournit notre service à l'ensemble de l'application grâce à l'injecteur racine **root**.
Mais il devrait idéalement n'être que disponible pour les fonctionnalités qui concernent que les pokémons, on niveau du module.
L'on va voir comment injecter ce service uniquement dans le module concerné.

### Fournir un service au niveau du module

Il faut modifier l'injecteur, on ne veut plus l'injecteur racine, on el palce dans le module.

### Fournir un service au niveau d'un composant

Ca a peu d'intêret, car chaque composant aura une instance du service qui est différente, on perd donc un peu le **pattern singleton = travailler avec une instance unique du service** dans le projet.

Dans @component => providers: [PokemonService], l'on aura dans le composant une instance du service et dans le pokemon module une autre.

## Les formulaires

### Un formulaire d'édition

Ajout d'un formulaire pour éditer un pokémon.

### Présentation des formulaires pilotés par le template

Deux modules différents sont utilisables avec Angular:
FormsModule et ReactivFormsModule.

FormsModule développe une partie importante du formulaire dans le template, on parle de template driven forms(débutant, petit formulaire).
Le second, plus centré sur le développement du formulaire côté composant.
Ils proveinnent de la même librairie @angular-forms.

Il y a deux directives: ngForm et ngModel, elles viennent du module forms.
### La directive ngForm

A partir du moment où le module a été importé, la directive ngForm devient actoive sur toutes les balises form disponible dans le module où est importé le formsModule.
Nous n'avon spas besoin d'ajouter d'autres sélecteurs dans les templates pour chaque formulaire.
Pour chaque formulaire où elle est appliquée la directive ngForm va créer une instance d'un objet nommé formGroup au niveau global du formulaire.

notification lors de la soumission ,et informations des erreurs user.

### La directive ngModel

Doit s'appliquer sur chacun des champs du formulaire.
Elle crée une instance d'un objet nommé formControl pour chaque champ du formulaire comme input ou select, chaque instance de formControl constituera une brique élémentaire du formulaire qui encapsulera l'état donné d'un champ, il a pour rôle de traquer la valeur du champ, les intéractions avec l'user, la validité des données saisies.
Chaque formControl doit être définie avec un nom: il faut ajouter l'attribut name à la balise HTML associée.
Lorsqu'elle est utilisée au sein d'une balise form, la directive s'occupe pour nous de l'enregistrer comme un élément fils de ce formulaire.
Combiné avec la précédente on peut savoir en temps réel si le formulaire est valide opu non.

On peutnutiliser la directive ngModelGroup pour créer des sous groupes de champs à l'intérieur du formulaireElle s'occupe de mettre en place une liaison de données bidirectionnelles pour chacun des champs du formulaire, cela permet de gérer les intéractions user côté template et les saisies côté composants. Elle s'occupe également d'ajouter ou retirer des classes sur chaque champ, l'on peut savoir si un user a cliqué ou non sur un champ,... => msg erreur.

### Mettre en place le module FormsModule

On va l'ajouter dans app.module car les deux modules de l'application en ont besoin.

Avant nos modules, import niveau racine et modulePokemon.

### Créer un formulaire

Nos besoins:
- édition de certaines propriétés d'un pokémon, pas l'id ni date, types, points de vie, dégâts, nom => 4champs,
- composant à part entière chargé de gérer les données saisies par l'user pour éditer un pokémon,
- template et composant dans deux fichiers séparés.

### Générer le formulaire

ng generate component pokemon/pokemon-form --inline-template=false

### Implémenter la logique du formulaire

ngOnInit => récup liste de tous les pokémons
vérifier avec une méthode hasType si pokémon possède où non le type en paramètre,
user va sélectionner un type, il faut pouvoir modifier le pokémon avec le nouveau type coché ou décoché,
submit.

### Présentation du template du formulaire

    <input type="text" class="form-control" id="name"
                    required
                    pattern="^[a-zA-Z0-9àéèç]{1,25}$"
                   [(ngModel)]="pokemon.name" name="name"
                   #name="ngModel">
                   <!-- règle de validation au HTML lié à Angular pour la validté du champ -->
                   <!-- ppt ngModel crochet => property binding qui permet de pousser les données de la classe du composant vers le template + ()  syntaxe de liason des event, pour remonter des event du template vers sa classe -->
                   Permet liaison bidirectionnelle, modif pokemon info côté composant et vue se met à jour.

### Présentation des règles de validation

Quelles restrictions souhaitons nous implémenter sur chaque champ du formulaire?

nom: champ obligatoire, chaîne de caratère de 1 à 25 lettre,
pv: nombre entre 0 et 999,
pv: nombre entre 0 et 99,
types: 1 à 3 types.
Tous les champs sont obligatoires.

**required => obligatoire + pattern => permet de définir une expression régulière pour valider un champ.**

>regex => expression régulière (regular expression), permettent de représenter des modèles de chaînes de caractère.

### Ajouter des règles de validation standard

Champ name:
    required
    pattern="^[a-zA-Z0-9àéèç]{1,25}$"
    chaîne de caratère de 1 à 25 caractères, quantifieur {1,25} ^$ =>uniquement ce qui est indiqué

### Créer une règle de validation personnalisée

On a une dernière méthode à implémenter pour la règle de validation des types de pokémons.
On implémente isTypeValid qui prend en paramètre un type et doit renvoyer un booleen => classe du composant pour définir la signature de la méthode.

### Prévenir l'user en cas d'erreur

Si erreur submit sera verrouillé, l'on doit le prévenir sur ce qui ne fonctionne pas.
L'on va utiliser les classes ajoutées automatiquement par la directive ngModel afin de faire:
utiliser ces classes avec le CSS pour la bordure en fonction de la validité, et utiliser les classes avec les variables de template et ngIf pour afficher un message en cas d'erreur sur un champ.

### Ajouter des indicateurs visuels pour un

NgModel et ngForm permettent de créer des classes CSS automatiquement  sur lesquelles l'on pourra intéragir, et diront si tel est valide ou non, intéraction ou non, ... 
Ajout CSS pour venir intercepter les classes pilotées par angular et pouvoir automatiquement mettre à jour le style du formulaire.

pokemon-form.component:

    
    styleUrls au pluriel car peut en avoir plusieurs
    styleUrls: ['./pokemon-form.component.css'] tablaux car plusieurs possibles

app-pokemon-form n'est pas intégré dans un comoosant parent. Il n'exite pas et n'est pas relié à une route.

### Afficher des messages d'erreurs aux users

Nous allons combiner la liaison de propriéte hidden avec la variable de template name.

    <div [hidden]="hp.valid || hp.pristine"
        class="card-panel red accent-1">
        Les points de vie du pokémon sont compris entre 0 et 999.
    </div>
Si champ mal renseigné.
Message d'erreur est masqué si la propriété name est valide ou non modifiée, grâce à l'attribut pristine.

### Intégration du formulaire

Création d'un composant EditComponentPokemon, son rôle sera de matcher avec l'URL que l'on va créer qui sera /edit/pokemon/pokemon/:id au niveau du routing.
Le pokemonForm sera un composant fils pour construire la vue.

ng generate component pokemon/edit-pokemon 

On va avoir besoin du pokemon courant, on le récupère côté logique du composant.
Pourquoi refaire un composant?
l'on pourra réutiliser le formulaire pour gérer le cas d'ajout d'un pokémon dans l'application, pplus souple,
séparation des objectifs, le formualire en soit est dézjà une tâche conséquente pour mériter son composant.

Voir add component.

Il faut ajouter la route, et bouton d'édition sur l'image du pokémon pour arriver sur le formulaire.

Dans les routes.

## Programmation réactive

Elément indispensable pour les applications.
Comment communiquer avec un serveur distant?

Il y a plusieurs manières de faire:
**appels sur le réseau avec des promesses, ou avec les observables et la programmation réactive.**

### Le fonctionnement des promesses

Elles sont natives en JS depuis l'arrivée de ES6.
Ca n'est plus un objet interne à Angular, on peut les utiliser sans de nouvelles importations.

Elles sont là pour essayer de simplifier la programmation asynchrone, qui désigne un mode de fonctionnement dans lequel les opérations sont non bloquantes.
L'user peut continuer l'application web sans que le site soit bloqué quand on fait un appel au serveur. On peut aussi utiliser des fonctions call back pour gérer les appels asynchrones, mais les promesses sont plus pratiques.
La création d'une promesse avec la classe promise => association impliciteune méthode then qui a deux arguments: une call back de succès et une ensuite call back d'erreur. Ainsi, lorsqu'une promesse a réussie, c'est la call back de succès qui est appelée, sinon c'est celle d'erreur qui est invoquée.

     let recupereUser = function(idUser) {
        <!-- renvoie une promesse qui contient l'objet user correspondant. Renvoie une promesse avec les infos du serveur -->
        return new promise(funtion(resolve, reject) {
            <!-- appel async au serveur pour récupèrer les infos d'un user -->
            let user = rsponde.data.user;

            if(response.status === 200) {
                resolve(user);
            } else {
                reject('Cet utilisateur n'existe pas');
            }
        });
     };

    recupereUser(idUser)
        .then(function(user) {
            console.log(user);
            this.user = user;
        }, function(error) {
            console.log(error);
        });
        <!-- avec méthode then pour pouvoir profiter de la réponse de la promesse, function anonyme -->

ES6 permet d'améliorer cela avec les **Arrow functions**, elles sont très utilisées avec la programmation asynchrone car elles permettent de remplacer des fonctions anonymes qui sont omniprésentes dans les appels asynchrones en JS avec une syntaxe plus élégante.

    recupereUser(idUser) 
        .then(user => {
            console.log(user);
            this.user = user;
        },error => console.log(error);
    )
Les promesses ont des limites, notamment quand il faut gérer un certains nombres de requêtes dans un délai très court => programmation réactive.

### Qu'est ce que la programmation réactive?

Est une nouvelle manière d'appréhender la programmation asynchrone.
C'est une façon différente de concevoir une application.
L'idée est de considérer les intéractions qui se déroulent dans l'application comme des événements sur lesquels on peut effectuer des opérations regroupements, filtrage, combinaisons, ...

Ainsi, des événements comme des clic de souris deviennet des flux d'événements asynchrones auxquels on peut s'abonner pour ensuite pour pouvoir y réagir.
Et il est possible de créer des flux à partir de tout et n'import quoi:
événements côté nav avec déclencheurs et côté serveur en traitant des requêtes à la BDD ou à des services tiers.
Toutes ces séquences d'événements = **flux**.

**Programmation réactive = programmation avec des flux de données asynchrones**.

De manière générale, tous ces événements sont poussés par un producteur de données vers un consommateur.
Notre rôle sera de définir des écouteurs d'événements, c'est à dire des **consommateurs**, sous forme de fonctions pour réagir aux différents flux qui sont les producteurs de données.

Les écouteurs d'événements sont nommés des **observeurs**, et le flux lui-même, le sujet observé, **observable**.
Lorsque l'on s'abonne à un flux pour capter ces événements, on dit que l'on s'**inscrit** ou s'**abonne** à ce flux.

### Qu'est ce qu'un flux?

Un flux est une séquence d'événements en cours qui sont ordonnés dans le temps.
Si on observe un user qui clique plusieurs fois sur un bouton pour une raison quelconque, la succession des clics peut être modélisée comme un flux d'événements. L'on peut appliquer des opérations sur ce flux d'événements.

Exemple:
l'on souhaite détecter les doubles clics user et ignorer les simples, l'on va considérer qu'il y a un double clic s'il y a moins de 250ms d'écart entre deux clics.

Fonction throttle => permet de tranformer un flux initial, en un nouceau flux selon des critères donnés.

### Traitement des flux

On peut faire plus sidfssdgsmple que de s'abonner à un flux.
Les flux peuvent émettre trois types de réponses différentes, pour chaque type de réponse on peut définir une fonction exécuter.

1- une fonction peut traiter les différentes valeurs de la réponse en un nombre, un tableau, des objets, ...
2- une fonction pour traiter le cas d'erreur,
3- une fonction pour traiter le signal de fin (flux terminé et n'émettra plus d'event).

Les event du flux représentent soit les valeurs de la réponse en cas de succès, soit des erreurs ou des terminaisons.

### La lirairie RxJs

Pour faciliter l'implémentation de la programmation réactive, on utilise souvent des librairies.
La bibliothèque la plus populaire pour la programmation réactive dans l'écosystème JS est RxJS.

### Les observables

Dans RxJS, un flux d'event est représenté par un objet = observable.
Ils sont très similaires à des tableaux comme ils contiennent une collection de valeurs. Un observable ajoute juste la notion de valeur reportée dans le temps.
Dans un tableau, toutes les valeurs sont disponibles immédiatement dans un observable, en revanche les valeurs viendront au fur et à mesure plus tard dans le temps.
On peut traiter un observable avec des opérateurs similaires à ceux des tableaux.

Exemple:

- fonction take => récupère les n premiers éléments d'un flux et se débarasser des autres, les autres éléments du flux n'apparaissent plus dans le flux tranformé,
- fonction map => applique la fonction passée en paramètre sur chaque event, et retourne le résultat,
- fonction filter => permet de filtrer les event qui répondent positivement aux prédicats passé en paramètre, 
- -fonction merge => fusion de deux flux,
- fonction subscribe => elle applique une fonction passée en paramètre à chaque event reçu dans le flux. Cette méthode accepte une deuxième fonction en paramètre consacrée à la gestion d'erreur. Lorsque le flux est terminé, il enverra un event de terminaison que l'on peut détecter avec une troisième fonction. 

Imaginons un observable dans lequel nous remplacerons les events par des nombres:

    Observable.fromArray([1, 2, 3, 4, 5])
    .filter(x => x > 2 ) //3, 4, 5
    .map(x => x * 2) //6, 8, 10
    .subscribe(x => console.log(x)); //affiche le résultat
    création d'un observable à partir d'un tableau

C'est le même fonctionnement que pour les flux. Un observable est une simple connexion asynchrone dont les events arrivent au cours du temps.
On peut construire des observables depuis une requête AJAX, depuis un event du nav, ... tout ce qui est asynchrone.

### Choisir entre oservable et promesse

Les observables sont différents des promesses, même s'il y ressemble par certaines aspects, car ils gèrent tout deux des valeurs asynchrones.
Mais un observable n'est pas à usage unique, il continuera à émettre des event jusquà ce qu'ils émettent un event de terminaison ou que l'on se désabonne de lui.
Les promesses sont plus simples et souvent suffisantes pour une application.
Il est possible de transformer un observable en une promesse grâce à la méthode toPromise de RxJS.

    import 'rxjs/add/operator/toPromise;

    function giveMePromiseFromObservable() {

        return Observable.fromArray([1, 2, 3, 4, 5])
            .filter(x => x > 2 ) //3, 4, 5
            .map(x => x * 2) //6, 8, 10
            .toPromise();
    }
    
## Les requêtes HTTP

Communiquer avec un serveur distant, pour rechercher, éditer, etc un pokémon et garder en mémoire les changements.
API = interfae de programmation, permet de communiquer avec un service distant depuis l'application.

### Mettre en place le client HttpClientModule

Angular on a une librairie clientHttp pour aller requêter des seveurs distants, il est compris dans Angular.

Il faut le fournir au niveau du module racine pour y avoir accès partout.
Il ne fournit pas d'éléments au niveau de la vue (pipe, directive,...), on peut l'importer une fois à la racine, et l'injecter dans tous les composants.
=> app.module.ts

### Simuler une API web

Jusqu'à maintenant l'on a stocké et récupéré nos données depuis une le PokemonService, dans une constante.
On aimerait pouvoir communqiuer avec un serveur distant.
Angular permet de simuler une API grâce à un module npm: npm install angular-in-memory-web-api --save-dev

Création d'un service pour simuler une bdd dans Angular:
ng generate service in-memory-data à la racine.

Ajout d'une interface InMemoryDataService, qui va demander d'implémenter une méthode pour simuler la BDD.

app-module import du module de la librairie pour simuler l'API: HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false}), => dataEncapsulation à false sinon par défaut la librairie à chaque requête va encapsuler nos réponses dans un élément data.

### Requêter un serveur distant

PokemonService.ts

Il faut faire deux méthodes de ce service: get pokemon list car l'on ne va pas faire une constante mais une requête réseau et ensuite récupèrer les données.
On va avoir un délai de réponse, avant la constante synchrone, maintenant requêter le serveur asynchrone.
On va développer du code sans les données à l'instant t.
Import client HTTP, l'injecter dans le PokemonService.


     getPokemonList(): Observable<Pokemon []> {
        // réception d'une donnée qui va rriver dans le temps qui contient un tab de pokemon, on ne retourne pas directement les pokémons. On retourne un flux
        return this.http.get<Pokemon[]>('api/pokemons').pipe(
            tap((pokemonList) => console.table(pokemonList)),
            catchError((error) => {
            console.log(error);
            return of([]);
            })
        )
        // httpCLient d'angular par défaut renvoie des flux qui oeuvent être typé, la requête get contient un tab de pokemon et on passe une URL vers une API
        // opérateur .pipe définir ce que l'on veut faire en plus du tmt de la requête: log resp et erreurs
        // req http get avec le client http angular et on reçoit un observable, on peut spécifier que la réponse contient une liste de pokémon. En pram de la méthode get URL, une fois qu'on a la réponse, on la log et si erreur log erreur et on retourne un tab vide
        // opérateur rxjs tap = équivalent console log adapté à un observable, il n'intervient pas sur la requête en elle même mais on va pouvoir venir faire des op à chaque nouvelles rep
        // catch evite l'app de crasher
  }

getPokemonList est utilisée ailleurs pas des compossants et l'on vient de changer la signature de la méthode (fonctionnement).

### Récupèrer un pokémon avec son id

PokemonService, l'on va se passer de la constante.

### Gestion des erreurs

Re factoriser.
Méthode PokemonService code redondant, l'on aura également d'autres requêtes.
Création d'une méthode privée accessible seulement pour les méthodes du service.

### Consommer des données asynchrones

Adapter nos composants pour  accèder à nos nouvelles données asynchrones: détail, list et edit.

Pendant une seconde message: aucun pokemon, c'est Angular qui met du temps à faire la requête donc le pokemon n'est pas disponible, lié à l'async.


### L'asynchrone et Angular

Problème dans le formulaire, car fichier statique les modifications étaient communes.
Pour persister les changements, avec une API, il faut les écrire sur le serveur c'est à dire avec une requête http pour enregistrer les modifications.

### Créer une méthode de modification

Côté service, on va implémenter une méthode pour persister les données vers le serveur.
updatePokemon dans PokemonService

    updatePokemon(pokemon: Pokemon): Observable<Pokemon|undefined> {
        // ici le paramètre, le corps part dans la requête HTTP pas que dans URL. Il faut préciser au client HTTP que l'on envoie des données dans notre requête.On ajoute un header => content type application/json. En cas d'erreur on renvoie undefined
        const httpOptions = {
        headers: new Headers({ 'Content-Type': 'application/json'})
        };

        return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, undefined))
        )
        // put pour persister des modifications d'un objet déjà existant:
        // .pipe ajout des tmt à l'observable
  }

### Persister les modifications user

Suite à l'ajout de la méthode, il faut s'en servir pour sauvegarder les données.

pokemonForm dans onSubmit => redir, on veut appeler la méthode, une fois changé on effectue la redirection.

erreur lors dela validation >null, on reçoit null dansle PokemonService, au lieu de renvoyer Pokemon (modifié) ou undefined renvoie null, cela est dû au fonctionnement del'API interne d'Angular.
On va donc travailler avec null, erreur ou pas.

### Supprimer un pokemon

PokemonServiceméthode suppression pokemon

### Ajouter un pokemon

PokemonService méthode pour persister le pokemon côté serveur
composant add qui va réutiliser le formulaire Pokemon mais pour en créer un nouveau
interface bouton rediriger vers page d'ajout

### Méthode post

PokemonService post

### Créer un composant Pokemon

addComponenentPokemon

ng generate component pokemon/add-pokemon  

On a récupèrer le formulaire, pokemon.ts fait un constructeut.
Le problème c'est que le submit du form est pour un update.

### Adapter le formulaire

Comment détecter au niveau du composant si l'on est dans le cas d'un ajout ou édition.

Construction route add/pokemon pour onSubmit cas ajout.

    { path: 'pokemon/add', component: AddPokemonComponent} dasn pokemonModule

Dans formulaire on va récupèrer l'URL courante pour distinguer si add ou edit. pokemon-form (on va avoir besoin du router).

    ngOnInit() {
        this.types = this.pokemonService.getPokemonTypeList();
        this.isAddForm = this.router.url.includes('add');
        // recup url et vérif si add dans url pour le form add sinon edit
    }

    if(this.isAddForm) {
      this.pokemonService.addPokemon(this.pokemon)
        .subscribe(() => this.router.navigate(['/pokemon', this.pokemon.id]));
        // redir vers pokemon créé après maj. L'id vient de l'api dans le cas d'un ajout, le backend va côté serveur attribuer un id unique. côté front ko car chaque client a une appli Angular qui vit dans son nav pour savoir si un id est dipo ou non => backend. add pokemon il faut ajouter des elmts, pokemon service on ne veut pas retourner nul mais le pokemon ajouté

Lors de l'ajout de l'image plus d'édition possible => template du pokemon form, ajout champ picture qui lors de la création d'un nouveau pokemon, pouvoir ajouter une image, seulement que dans le cadre d'un ajout.

Voir pour définir un regex picture ajout template:

    <!-- Pokemon picture si ajout -->
          <div *ngIf="isAddForm" class="form-group">
            <label for="picture">Image</label>
            <input type="url" class="form-control" id="picture"
                    required
                   [(ngModel)]="pokemon.picture" name="picture"
                   #picture="ngModel">
                   <!-- règle de validation au HTML lié à Angular pour la validté du champ -->
                   <!-- ppt ngModel crochet => property binding qui permet de pousser les données de la classe du composant vers le template + ()  syntaxe de liaison des event, pour remonter des event du template vers sa classe. Combi des deux => liaison de données bidirectionnelle -->
                   <!-- rst du ngModel qui en interne pour Angular est un objet métier qui va représenter un chamo sera attribué àune var réf dans le template. On va pour voir binder cette ppt pour la réutiliser voir ci-dessous-->
                  <!-- ngModel un champ -->
            <div [hidden]="picture.valid || picture.pristine"
                  class="card-panel red accent-1">
                  L'image du pokémon est requise.
            </div>
            <!-- si champ valide on garde si champ intouché on attend l'intéraction au moins 1 fois -->
          </div>

### Ajouter un lien vers le formulaire d'ajout

Ajout d'un bouton sur la liste, pour rediriger vers le formulaire d'ajout.
id a été généré de manière dynamique par le backend.


## La librairie RxJS

### Présentation du champ de recherche

Fontionnalité de recherche via leurs noms.
Ce champ de recherche devra implémenter l'auto complétion.
Pour le moment, l'on a effectué des requêtes http simples = one shot, requête résultat.
Dans certains cas, on peut en lancer une l'annuler,et en relancer une autre avant que le serveur n'ait répondu, cela est plus difficle à implémenter.

### Rechercher des pokémons dynamiquement

Requête au serveur qui prend un paramètre de recherche, et qui va retourner tous les pokémons qui commencent ou contiennent par le paramètre.

PokemonService (logique accès aux données) => méthode recherche liste en fonction d'un terme donné.

    searchPokemonList(term: string):obeservable<Pokemon[]> {
        return this.http.get<Pokemon[]>(`api/pokemon/?name=${term}`).pipe( //requête sur une propriété du pokemon, ici name
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, []))
        ); 
    }
    fonction qui retourne un flux de données avec une liste de pokemon qui correspondent au terme de recherche de l'user.

### Construire un composant de recherche

Le composant contiendra le champ de recherche.

ng generate component pokemon/search-pokemon --inline-template=false

    searchTerms = new Subject<string>();
    // la classe Subject appartient à RxJS pas Angular, permet de stocker les recherches successives de l'user, stockées dans un tableau de string => flux dans le tps des recherches user  {..."a".."ab"...} ce compoirte comme un observable sauf que le subject peut être consommé contrairement à l'observable. On oeut ainsi piloter un observable 
    pokemons$: Observable<Pokemon[]>;
    // observable ne peut que être subscribe pour recevoir les données dans le temps 
    // {...pokemonList(a)..pokemonList(ab)..}

On va construire un flux de données pas seulement de le consommer, à artir de ces données qui arrivent dans le temps on va afficher les résultats qui correspondent à la recherche avec l'obs.
Evite d'annuler les requêtes.
Pour pousser des données dans notre flux searchTerms, à chaque fois que l'user recherche un term => on prend le subject searchTerms, et on va venir utiliser la méthode next pour pousser le terme de recherche tapé.
Recherche dans le template appel cette méthode search. et on va pousser son terme de recherche dans search

    <div class="row">
        <div class="col s12 m6 offset-3">
            <div class="card">
                <div class="card-content">
                    <div class="input-field">
                    <!-- #searchBox = var réf dans le template pour pousser le terme qui vient d'être tapé, on récupère sa valeur courante -->
                        <input #searchBox 
                                (keyup)="search(searchBox.value)" 
                                placeholder="Search a pokemon"> 
                        <!-- affichage des rst: class collection et affcihage d'une liste de liens qui correspondent aux pokemons de la rech user, clique sur le lien redir sur le pokemon -->
                        <div class="collection">
                            <!-- pokemons$ convention est un observable, flux de données var avec flux de données $ + pipe async => que sur flux de données, évite de faire subscribe (dans OnInit)-->
                            <a *ngFor="let pokemon of pokemons$ | async" 
                                (click)="goToDetailPokemon(pokemon)"
                                class="collection-item"
                            >
                                {{ pokemon.name }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

Il faut le brancher.

### Construire un observable personnalisé

Visuel à la méthode searchPokemon.
Transformer searchTerms, liste de demande user, en un pokemon$ = flux de résultats concrets de recherche pour l'user.

ngOnInit

### Optimiser un flux de requêtes

Une recherche avec une lettre, tout s'affiche et recherche vide liste de tous les résultats.
Il faudrait au moins deux lettres pour la pertinenece et éviter de surcharger le serveur.

### Ajouter une icône de chargement 

Lors du chargement "aucun pokemon affiché", plus lente. L'api simulée met 500ms à nous donner une réponse.
ng generate component pokemon/loader 

Dans détail et form.

## Authentification et sécurité

[Angular Guards](https://angular.io/guide/router-tutorial-toh#milestone-5-route-guards)

Pour mettre en place une authentification l'on a besoin des guards => mécanisme de protection utilisé par Angular pour mettre en place l'authentification mais pas seulement.

### Qu'est-ce qu'un guards?

Les guards peuvent être utilisés pour gérer toutes sortes de scénarios liés à la navigation, rediriger un user qui tente d'accèder à une route, l'obliger à s'authentifier...
Ils retournent un booleen pour contrôler le comportement de la nvaigation.
Le booleen peut être retourné un booléen de manière synchrone, ou asynchrone, mais souvent, il ne peut pas renvoyer un résultat de manière synchrone car il atend une réponse.
Observable de type booléen, ou une promesse et le routeur attendra la réponse pour agir sur la navigation. Même s'il est conçu pour intéragir avec la navigation, il en existe d'autres:
- le guard CanActivate qui peut influencer sur la navigation d'une route et notamment la bloquer, utilisé pour construire le système d'authentification,
- CanActivateChild: sur la navigation d'une route fille,
- Resolve: peut effectuer une récupération de données avant de naviguer,
- CanLoad: peut gérer la navigation vers un sous module chargé de manière asynchrone.

Cependant si un guards retourne false, tous les autres guards seront annulés et la navigation entière sera bloquée.

### Mettre en place un guard

Hello world de l'authentification => msg dans la console quand l'user tente d'accèder à l'édition d'un pokémon.

Détecter l'endroit pour indiquer le blocage.
ng generate guard auth =>CanActivate

Généré dans app.

pokemon.module:

    { path: 'edit/pokemon/:id', component: EditPokemonComponent, canActivate: [authGuard]}, import authGuard et appliqué à la route d'édition en plus du chemin et composant.
Avant de donner l'autorisation à cette route on appelle un guard. i false bloque l'accès à l'édition.

### Créer un service d'authentification

Mettre en place le guard sur toutes nos routes, et mettre en place un système d'authentification qui sera mis en place dans les guards.

Redirection des user anonymes vers un formulaire de connexion.
On sécurisetoutes les routes du pokemonModule.

Il faut un nouveau service dédié à l'authentification et qui va permettre de dire si l'user est connecté ou nom.
Le rôle du guard c'est de piloter le routing.
L'authentification vérifie les id.

ng generate service auth

### Ajout d'une page de connexion sécurisée

Création d'un composant qui va venir matcher avec la nouvelle route avec un forlulaire de connexion, pour permettre aux users de se connecter.

ng generate component login --inline-template=false

Déclarer le nouveau composant dans app-routing
