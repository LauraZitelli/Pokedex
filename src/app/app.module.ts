import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { ListaPokemonComponent } from './components/lista-pokemon/lista-pokemon.component';
import { AdicionaPokemonComponent } from './components/adiciona-pokemon/adiciona-pokemon.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { EvolucaoComponent } from './components/evolucao/evolucao.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaPokemonComponent,
    AdicionaPokemonComponent,
    PokemonDetailComponent,
    EvolucaoComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
