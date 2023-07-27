import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// par défaut import commonmodule, base nécessaire dans les modules, qui comprend les directives structurelles, on peut utiliser ngif ngfor sans les importer
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { BorderCardDirective } from './border-card.directive';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { LoaderComponent } from './loader/loader.component';
import { authGuard } from '../auth.guard';

const pokemonRoutes: Routes = [
  { path: 'edit/pokemon/:id', component: EditPokemonComponent, canActivate: [authGuard]},
  { path: 'pokemon/add', component: AddPokemonComponent, canActivate: [authGuard]},
  { path: 'pokemons', component: ListPokemonComponent, canActivate: [authGuard] },
  { path: 'pokemon/:id', component: DetailPokemonComponent, canActivate: [authGuard] }
];

@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    SearchPokemonComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  providers: [PokemonService]
  // on fournit le service ici que dans l'injecteur racine
})
export class PokemonModule { }
// import dans app.module pour le relier à l'app. Module fils
