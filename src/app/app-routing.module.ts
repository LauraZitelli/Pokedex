import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaPokemonComponent } from './components/lista-pokemon/lista-pokemon.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  // { path: '', component:  },
  { path: 'pokemons', component: PokemonDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
