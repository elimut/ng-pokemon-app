import { Component, Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})

export class PokemonFormComponent {

  @Input() pokemon: Pokemon;
  // passer ppt entrée pokemon pour éditer dans le forms
  types: string[];
  // décla ppt type boolean pour récup l'URL courante
  isAddForm: boolean;

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) {}

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
    this.isAddForm = this.router.url.includes('add');
    // recup url et vérif si add dans url pour le form add sinon edit
  }

  hasType(type: string) : boolean{
    return this.pokemon.types.includes(type);
    // est ce que le pokemon de @input a le type passé en paramètre
  }

  selectType(event: Event, type: string) {
    // coche ou décoche une case, si type est dispo dans le pokémon soit retirer soit ajouter. clic
    const isChecked: boolean = (event.target as HTMLInputElement).checked;

    if(isChecked) {
      this.pokemon.types.push(type);
    } else{
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  isTypesValid(type: string): boolean {

    if(this.pokemon.types.length == 1 && this.hasType(type)) {
      // on en veut bloquer que la seule case cochée mais pas les autres pour ne pas 0, on utilise hasType. Si un seul type et le type courant on bloque la checkbox
      return false;
    }

    if(this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false;
      // n'appartient pas au type courant voir template disabled
    }

    return true;
  }
  // 2 cas d'erreur à définir moins d'un type ou plus de trois => bloquer les checkbox, sinon valid renvoie true

  onSubmit() {
    // console.log('Submit form!');
    // mise en place router pour redir sur le pokémon modifié
    // this.router.navigate(['/pokemon', this.pokemon.id]);
    // this.pokemonService.updatePokemon(this.pokemon)
    //   .subscribe(() => this.router.navigate(['/pokemon', this.pokemon.id]));//, si erreur (error) => snackbar error);
    //   // on récup le pokemon renvoyé par update et l'on redirige vers la page qui vient d'être éditée
    if(this.isAddForm) {
      this.pokemonService.addPokemon(this.pokemon)
        .subscribe((pokemon: Pokemon) => this.router.navigate(['/pokemon', pokemon.id]));
        // redir vers pokemon créé après maj. L'id vient de l'api dans le cas d'un ajout, le backend va côté serveur attribuer un id unique. côté front ko car chaque client a une appli Angular qui vit dans son nav pour savoir si un id est dipo ou non => backend
    } else {
      this.pokemonService.updatePokemon(this.pokemon)
        .subscribe(() => this.router.navigate(['/pokemon', this.pokemon.id]));
    }
  }
}

