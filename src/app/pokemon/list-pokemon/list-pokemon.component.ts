import { Component, OnInit } from '@angular/core';
// import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit {

  // pokemonList: Pokemon[] = POKEMONS;
  // mise en place service 
  pokemonList: Pokemon[];

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  // ngOnInit() {
  //   this.pokemonList = this.pokemonService.getPokemonList();
  // }
  // // accès liste grâce au service
  ngOnInit() {
    this.pokemonService.getPokemonList()
      .subscribe(pokemonList => this.pokemonList = pokemonList);
  }
  // subscribe abo à l'observable qui fait une req réseau et retourne la liste, on va recevoir une list de pokemon.Une fois reçue sera attr à la ppt pokemonList du composant, elle est poussée dans la pokemonList.

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id]);
  }
}
