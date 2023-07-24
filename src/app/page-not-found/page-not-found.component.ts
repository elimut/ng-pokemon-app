import { Component } from '@angular/core';
  
@Component({
    selector: 'page-404',
    template: `
    <div class='center'>
    <h1>Hey, cette page n'existe pas !</h1>
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"/>
      <a routerLink="/pokemons" class="waves-effect waves-teal btn-flat">
        Retourner à l' accueil
      </a>
      <!-- directive de redir  -->
    </div>
  `
})

export class PageNotFoundComponent { }