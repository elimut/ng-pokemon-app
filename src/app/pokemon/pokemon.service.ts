import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Injectable(
  // {
  // décorateur permet d'indiquer à Angular que notre service peut lui même avoir d'autres dépendances. Pour brancher ce service avec le mécanisms d'injection de dépendances d'Angular.
  // providedIn: 'root'// retiré pour n'être injecté que dans le module considéré
  // cette ppt indique à Angular que l'on veut utiliser la même instance du service à travers toute l'app. Nous ne créerons jamais d'instance nous même
// }
)
export class PokemonService {

  getPokemonList(): Pokemon [] {
    // renvoie model
    return POKEMONS;
    // liste des pokémons, réencapsulée dans un service pour profiter du syst d'injection de dépendance
  }

  getPokemonById(pokemonId :number): Pokemon | undefined {
    return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  }

  getPokemonTypeList(): string[] {
    return [
      'Plante', 
      'Feu', 
      'Eau', 
      'Insecte', 
      'Normal', 
      'Electrik', 
      'Poison', 
      'Fée', 
      'Vol', 
      'Combat', 
      'Psy'
    ]; 
  }
  
}
