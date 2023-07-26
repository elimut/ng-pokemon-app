import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h2>Editer {{ pokemon?.name }}</h2>
    <p *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture">
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  // affiche image si pokemon
  //ajout formulaire avec le selecteur balise html perso, il faut une ppt d'entrée car dans le composant il y a un @Input. [pokemon] permet de lier la pptd'entrée, et on lui passe comme val le pokemon en cours d'édition
  styles: [
  ]
})
export class EditPokemonComponent implements OnInit {

    pokemon: Pokemon|undefined;

    constructor(
      private route: ActivatedRoute,
      private pokemonService: PokemonService
    ) {

    }
    // récup id dans la route /pokemon/edit/:id + pokemonService donc 2 injections dans le composant

    ngOnInit(): void {
        const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
        if(pokemonId) {
          this.pokemonService.getPokemonById(+pokemonId) 
            .subscribe(pokemon => this.pokemon = pokemon);
        } else {
          this.pokemon = undefined;
        }
    }

}
