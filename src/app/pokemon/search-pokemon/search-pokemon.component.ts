import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinct, distinctUntilChanged, switchMap } from 'rxjs';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
})
export class SearchPokemonComponent implements OnInit {

  searchTerms = new Subject<string>();
  // la classe Subject appartient à RxJS pas Angular, permet de stocker les recherches successives de l'user, stockées dans un tableau de string => flux dans le tps des recherches user  {..."a".."ab"...} ce compoirte comme un observable sauf que le subject peut être consommé contrairement à l'observable. On oeut ainsi piloter un observable 
  pokemons$: Observable<Pokemon[]>;
  // observable ne peut que être subscribe pour recevoir les données dans le temps 
  // {...pokemonList(a)..pokemonList(ab)..}
  // sera vide au début

  constructor(
    private router: Router,
    private pokemonService: PokemonService
    ) {
    
  }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      // {..."a".."ab".."abz"."abc"..."a"....."ab"} chaque point rep le temps si délai court et changement faute de frappe. On ne veut pas effcetuer plusieurs appels au serveur. On va attendre avant de lancer la requête = debounceTime permet d'éliminier les recherches qui n'ont pas au mloins un certain nombre de ms d'attente après. supprime les termes de rech trop succints
      debounceTime(300), // {..."a"..."a"....."ab"} mais deux fois la même valeurs
      // éliminer les recherches successivement identiques 
      distinctUntilChanged(), //attend changement dans les termes de recherche {..."a"........"ab"} requête exacte au serveur
      // map(term => this.pokemonService.searchPokemonList(term))
      // sollicitation serveur mais map transf ab en un observable mais on ne veut pas un observable avec les rst dedans, on veut le tab de pokemon à l'int: concatMap, mergeMap ou switchMap on va dans la plupart des cas utiliser switchMap => user nvl recherche annulation de la dernière rech si en cours et venir effectuer uniquement la rech la plus récente et ne renvoie pas un flux
      switchMap(term => this.pokemonService.searchPokemonList(term))
      // {..pokemonList(a)}
    );
  }

  search(term: string) {
    this.searchTerms.next(term);
    // on pousse le terme de recherche de l'user on aura le flux en sortie.
  }

  goToDetail(pokemon: Pokemon) {
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  } //quand user clique sur l'un des résultats des champs de recherche
}
