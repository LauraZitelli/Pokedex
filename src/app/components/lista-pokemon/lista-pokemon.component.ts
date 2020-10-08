import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { ListarPokemonService } from '../../services/listar-pokemon.service';



@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.css']
})

export class ListaPokemonComponent implements OnInit, OnDestroy {

  constructor(private listarPokemonService: ListarPokemonService, private route: ActivatedRoute, private router: Router) { }

  public searchPokemon: any = '';
  public errorMessage: any = null;
  public total: any = 807;

  public variavelBusca: Subscription;

  public listaDePokemons: any[] = [];
  public listaDeApresentacao: any[] = [];

  public index: any = 0;
  public pokemonAtual: any = '';

  public offset: any = 0;
  public limit: any = 807;

  ngOnInit(): void {
    this.listarPokemon(this.offset, this.limit);
  }


  listarPokemon(offset: any, limit: any): any {
    const listando = this.listarPokemonService.listarPokemon(offset, limit).pipe(first());
    listando.subscribe( data =>
      data.results.forEach(element => {
        this.listaDePokemons.push(element.name);
        this.pokemonAtual = element.name;
        this.getQuery();
      }), console.log(this.listaDePokemons)
    );

  }

  getQuery(): void {
    this.variavelBusca = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.searchPokemon = queryParams.searchKey;
        this.obterPokemon();
      },
    );
  }

  // retorna o elemento que combina com o filtro searchPokemon
  obterPokemon(): any {
    if (! (this.listaDePokemons.length === 0 || ! this.searchPokemon) ) {
      this.listaDeApresentacao = [];
      this.listaDeApresentacao = this.listaDePokemons.filter(pokemon => {
        return pokemon === this.searchPokemon;
      });
      this.errorMessage = null;
      if (this.listaDeApresentacao.length === 0){
        this.errorMessage = 'Pokemon Não Encontrado :(  Clique na Pokedex para voltar ao menu!';
      }
    } else {
      this.listaDeApresentacao = [];
      this.listaDeApresentacao = this.listaDePokemons;
    }
  }

  /*
  handleOnClick(): void {
    this.offset = this.offset + 20;
    this.limit = this.limit + 10;
    this.listarPokemon(this.offset, this.limit);
  }
  */

  ngOnDestroy(): void {
    this.variavelBusca.unsubscribe();
  }

}
