import { Component, Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styles: [
  ]
})
export class PokemonFormComponent {

  @Input() pokemon: Pokemon;
  // passer ppt entrée pokemon pour éditer dans le forms
  types: string[];

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) {}

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
  }

  hasType(type: string) : boolean{
    return this.pokemon.types.includes(type);
    // est ce que le pokemon de @input a le types passé en paramètre
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

  onSubmit() {
    console.log('Submit form!');
    // mise en place router pour redir sur le pokémon modifié
    this.router.navigate(['/pokemon', this.pokemon.id]);
  }

}
