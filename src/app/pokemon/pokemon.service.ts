import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
// import { POKEMONS } from './mock-pokemon-list';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable(
  // {
  // décorateur permet d'indiquer à Angular que notre service peut lui même avoir d'autres dépendances. Pour brancher ce service avec le mécanisms d'injection de dépendances d'Angular.
  // providedIn: 'root'// retiré pour n'être injecté que dans le module considéré
  // cette ppt indique à Angular que l'on veut utiliser la même instance du service à travers toute l'app. Nous ne créerons jamais d'instance nous même
// }
)
export class PokemonService {

constructor(private http: HttpClient) {

}

  // getPokemonList(): Pokemon [] {
  //   // renvoie model
  //   return POKEMONS;
  //   // liste des pokémons, réencapsulée dans un service pour profiter du syst d'injection de dépendance
  // }
  getPokemonList(): Observable<Pokemon[]> {
    // réception d'une donnée qui va rriver dans le temps qui contient un tab de pokemon, on ne retourne pas directement les pokémons. On retourne un flux
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
        // tap((pokemonList) => console.table(pokemonList)),
        tap((response) => this.log(response)),
        // catchError((error) => {
        //   console.log(error);
        //   return of([]);
        // })
        catchError((error) => this.handleError(error, []))
    );
    // httpCLient d'angular par défaut renvoie des flux qui oeuvent être typé, la requête get contient un tab de pokemon et on passe une URL vers une API
    // opérateur .pipe définir ce que l'on veut faire en plus du tmt de la requête: log resp et erreurs
    // req http get avec le client http angular et on reçoit un observable, on peut spécifier que la réponse contient une liste de pokémon. En pram de la méthode get URL, une fois qu'on a la réponse, on la log et si erreur log erreur et on retourne un tab vide
    // opérateur rxjs tap = équivalent console log adapté à un observable, il n'intervient pas sur la requête en elle même mais on va pouvoir venir faire des op à chaque nouvelles rep
    // catch evite l'app de crasher
  }

  // getPokemonById(pokemonId :number): Pokemon | undefined {
  //   return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  // }
  getPokemonById(pokemonId: number): Observable<Pokemon|undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      // tap((pokemon) => console.table(pokemon)),
      tap((response) => this.log(response)),
        // catchError((error) => {
        //   console.log(error);
        //   return of(undefined);
        // })
      catchError((error) => this.handleError(error, undefined))
    );
  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon|undefined> {
    // ici le paramètre, le corps part dans la requête HTTP pas que dans URL. Il faut préciser au client HTTP que l'on envoie des données dans notre requête.On ajoute un header => content type application/json. En cas d'erreur on renvoie undefined
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };

    return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    )
    // put pour persister des modifications d'un objet déjà existant:
    // .pipe ajout des tmt à l'observable
  }

  // private log(response: Pokemon[]|Pokemon|undefined) {
  //   console.table(response);
  // }
  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(error, errorValue);
    // of permet de transf une donnée simple en un flux de données = un observable qui émet la donnée en param
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
