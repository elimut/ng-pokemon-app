import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
// import { DetailPokemonComponent } from './pokemon/detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // { path: 'pokemons', component: ListPokemonComponent },
  // { path: 'pokemon/:id', component: DetailPokemonComponent },
  { path: '', redirectTo: 'pokemons', pathMatch: "full" },
  { path: 'login', component: LoginComponent},
  { path: '**', component: PageNotFoundComponent }
];
// décl des routes dans l'app.

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
