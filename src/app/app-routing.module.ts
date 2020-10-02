import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { ListaPokemonComponent } from './components/lista-pokemon/lista-pokemon.component';

const routes: Routes = [
  { path: '', component: ListaPokemonComponent },
  { path: 'search', component: ListaPokemonComponent },
  { path: 'pokemons/:key', component: PokemonDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
