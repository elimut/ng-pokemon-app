import { Pipe, PipeTransform } from '@angular/core';
  
/*
 * Affiche la couleur correspondant au type du pokémon.
 * Prend en argument le type du pokémon.
 * Exemple d'utilisation:
 *   {{ pokemon.type | pokemonTypeColor }}
*/
@Pipe({name: 'pokemonTypeColor'})
export class PokemonTypeColorPipe implements PipeTransform {
  transform(type: string): string {
      // ajoutée par l'interface pipeTransform, rend en entrée une valeur => sur laquelle on applique le pipe et renvoie la donnée tranformée.
      // type string tranfo en une classe string
    let color: string;
  
    switch (type) {
      case 'Feu':
        color = 'red lighten-1';
        break;
      case 'Eau':
        color = 'blue lighten-1';
        break;
      case 'Plante':
        color = 'green lighten-1';
        break;
      case 'Insecte':
        color = 'brown lighten-1';
        break;
      case 'Normal':
        color = 'grey lighten-3';
        break;
      case 'Vol':
        color = 'blue lighten-3';
        break;
      case 'Poison':
        color = 'deep-purple accent-1';
        break;
      case 'Fée':
        color = 'pink lighten-6';
        break;
      case 'Psy':
        color = 'deep-purple darken-2';
        break;
      case 'Electrik':
        color = 'lime accent-1';
        break;
      case 'Combat':
        color = 'deep-orange';
        break;
      default:
        color = 'grey';
        break;
    }
  
    return 'chip ' + color;
  // retour d'une classe qui vient de materialize, on va combinerune classe qui s'appelle chip, petit rond de couleur avec la couleur en focntion du type.
  }
}