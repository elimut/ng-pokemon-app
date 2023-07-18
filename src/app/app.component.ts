import { Component, OnInit } from '@angular/core';
// import interface OnInit
import { POKEMONS } from './mock-pokemon-list'
import { Pokemon } from './pokemon';

@Component({
  // décorateur
  selector: 'app-root',
  // template: `<h1>Bienvenue sur {{title}}!</h1>`
  // template: `<h1>Bienvenue sur {{ pokemonList[1] }}!</h1>`
  // template: `<h1>Liste de Pokémons</h1>
  // <p>Ceci est un paragraphe</p>
  // <p>Ceci est un paragraphe</p>
  // <p>Ceci est un paragraphe</p>
  // `
  templateUrl: 'app.component.html'
  // pour écrire le template dans un fichier à part. html et ts dans même fichier pas besoin de chemin relatif
})
// la vue est définie dans le template du composant, la logique de la vue sera pilotée par la classe du composant qui est défini plus bas. Si maj dans la ppt, le template se met à jour.
export class AppComponent implements OnInit {
  // implements interface OnInit
  // title = 'Application de pokémons';
  // décla ppt title. Va venir remplacer la valeur dans le template: `<h1>Welcome to {{title}}!</h1>` 
  // pokemonList = ['Bulbizarre', 'Salamèche', 'Carapuce'];
  // propriété pokemons qui contient un tab de pokemons => envoie erreur car template lié à la ppt title ne peut pas fonctionner. Il faut pousser la ppt pokemons dans le template
  pokemonList: Pokemon[] = POKEMONS; 
  //  Ajout d'un type pour éviter de modifier la prop. Indique c'estun tab de pokemon
  ngOnInit(): void {
    // console.table(pokemonList);
    // erreur car la pokemonList n'existe pas = scope, la var est définie au dessus, il faut utiliser le this.
    console.table(this.pokemonList);
    // afficher un tableau
    this.selectPokemon(this.pokemonList[0]);
    // appel de la méthode.
  }
  // définition de la méthode associée à l'interface OnInit. Typage TS: la méthode ne renvoie rien = void

  // selectPokemon(pokemonName: string) {
  //   console.log(`Vous avez cliqué sur le pokémon ${pokemonName}`);
  //   // décla méthode si user clique sur tel élément du tempalte on va venir lier cette méthode qui sera exécutée
  // }
  selectPokemon(pokemon: Pokemon) {
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
    // décla méthode si user clique sur tel élément du tempalte on va venir lier cette méthode qui sera exécutée
  }
}
