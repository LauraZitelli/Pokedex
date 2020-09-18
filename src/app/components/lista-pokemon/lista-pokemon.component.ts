import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ListarPokemonService } from '../../services/listar-pokemon.service';


@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.css']
})
export class ListaPokemonComponent implements OnInit {

  constructor(private listarPokemonService: ListarPokemonService) { }

  public listaDePokemons: any[] = [];
  public index: any = 0;
  public pokemonAtual: any = '';

  public offset: any = 0;
  public limit: any = 20;

  ngOnInit(): void {
    this.listarPokemon(this.offset, this.limit);
  }

  listarPokemon(offset: any, limit: any): any {
    this.listarPokemonService.listarPokemon(this.offset, this.limit).subscribe(data =>
      data.results.forEach(element => {
        this.listaDePokemons[this.index] = element;
        this.pokemonAtual = element.name;
        this.index++;
      })
    );
    // console.log(this.listaDePokemons);
  }

}
