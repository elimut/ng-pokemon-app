import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// rendu dispo depuis le constructeur
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html'
  // providers: [PokemonService]
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    // this.pokemonList = POKEMONS;
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    // récup de l'id dans la route à l'instant t

    if(pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId) 
        .subscribe(pokemon => this.pokemon = pokemon);
    } 
  }

  deletePokemon(pokemon: Pokemon) {
    this.pokemonService.deletePokemonById(pokemon.id)
      .subscribe(() => this.goToPokemonList());
  }

  goToPokemonList() {
    this.router.navigate(['/pokemons']);
    // param du router, bouton retour, dans un tab. import router. ppt navigate du router.
  }

  goToEditPokemon(pokemon: Pokemon) {
    this.router.navigate(['/edit/pokemon', pokemon.id]);
    // redirige au clic sur formulaire d'édition
  }

  goToAddPokemon(pokemon: Pokemon) {
    this.router.navigate(['/add/pokemon']);
    // redirige au clic sur formulaire d'ajout
  }
}
