import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';

import { ListarPokemonService } from '../../services/listar-pokemon.service';


@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.css']
})
export class ListaPokemonComponent implements OnInit, OnChanges {

  constructor(private listarPokemonService: ListarPokemonService) { }

  public listaDePokemons: any[] = [];
  public listaDeApresentacao: any[] = [];

  public index: any = 0;
  public pokemonAtual: any = '';

  public offset: any = 0;
  public limit: any = 21;


  @Input() searchPokemon: string; // filtro

  ngOnInit(): void {
    this.listarPokemon(this.offset, this.limit);
  }

  ngOnChanges(): void {
    this.obterPokemon();
  }

  listarPokemon(offset: any, limit: any): any {
    this.listarPokemonService.listarPokemon(offset, limit).subscribe(data =>
      data.results.forEach(element => {
        this.listaDePokemons.push(element.name);
        this.pokemonAtual = element.name;
      }), this.obterPokemon()
    );

  }

  // deveria retornar o elemento cujo nome é igual ao nome pesquisado na lista
  obterPokemon(): any {
    if (! (this.listaDePokemons.length === 0 || ! this.searchPokemon) ) {
      this.listaDeApresentacao = [];
      this.listaDeApresentacao = this.listaDePokemons.filter(pokemon => {
        return pokemon === this.searchPokemon;
      });
      if (this.listaDeApresentacao.length === 0){
        alert('Pokemon não encontrado');
      }
    } else {
      this.listaDeApresentacao = [];
      this.listaDeApresentacao = this.listaDePokemons;
    }
  }

}
