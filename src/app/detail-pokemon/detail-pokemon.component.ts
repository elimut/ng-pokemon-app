import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// rendu dispo depuis le constructeur
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.pokemonList = POKEMONS;
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    // récup de l'id dans la route à l'instant t

    if(pokemonId) {
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    } 
  }

  goToPokemonList() {
    this.router.navigate(['/pokemons']);
    // param du router, bouton retour, dans un tab. import router. ppt navigate du router.
  }
}
