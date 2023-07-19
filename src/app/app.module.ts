import { NgModule } from '@angular/core';
// équivalent de l'importation component du coeur du framework angular utilisé avec @NgModule pour déclarer un module auprès d'angular
import { BrowserModule } from '@angular/platform-browser';
// module qui fourni les éléments essentiels pour le fonctionnement de l'app

import { AppRoutingModule } from './app-routing.module';
// import du fichier qui contient les routes du projet
import { AppComponent } from './app.component';
// import du composant dans le module racine
import { BorderCardDirective } from './border-card.directive';


@NgModule({
  declarations: [
    // déclarations d'une liste de tous les components, directives, pipes... qui appartiennent au module pour fonctionner
    AppComponent,
    BorderCardDirective
  ],
  imports: [
    // déclaration ds éléments nécessaires au module mais qui sont d'autres modules 
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // utilisation du système d'injection des dépendances Angular, il existe d'autres manières aujourd'hui 
  bootstrap: [AppComponent]
  // propre au module racine = boostrap composant racine. Permet de dire à angular quel est le premier composant qui doit démarrer lorsque l'user charge l'application dans son nav
})
export class AppModule { }
