import { NgModule } from '@angular/core';
// équivalent de l'importation component du coeur du framework angular utilisé avec @NgModule pour déclarer un module auprès d'angular
import { BrowserModule } from '@angular/platform-browser';
// module qui fourni les éléments essentiels pour le fonctionnement de l'app

import { AppRoutingModule } from './app-routing.module';
// import du fichier qui contient les routes du projet
import { AppComponent } from './app.component';
// import du composant dans le module racine
// import { BorderCardDirective } from './pokemon/border-card.directive';
// import { PokemonTypeColorPipe } from './pokemon/pokemon-type-color.pipe';
// import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
// import { DetailPokemonComponent } from './pokemon/detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    // déclarations d'une liste de tous les components, directives, pipes... qui appartiennent au module pour fonctionner
    AppComponent,
    // BorderCardDirective,
    // PokemonTypeColorPipe,
    // ListPokemonComponent,
    // DetailPokemonComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    // déclaration ds éléments nécessaires au module mais qui sont d'autres modules 
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false}),
    PokemonModule,
    AppRoutingModule
  ],
  providers: [],
  // utilisation du système d'injection des dépendances Angular, il existe d'autres manières aujourd'hui 
  bootstrap: [AppComponent]
  // propre au module racine = boostrap composant racine. Permet de dire à angular quel est le premier composant qui doit démarrer lorsque l'user charge l'application dans son nav
})
export class AppModule { }
