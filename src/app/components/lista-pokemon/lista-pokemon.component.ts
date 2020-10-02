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
  public errorMessage: any = undefined;

  public listagem: Subscription;
  public variavelBusca: Subscription;

  public listaDePokemons: any[] = [];
  public listaDeApresentacao: any[] = [];

  public index: any = 0;
  public pokemonAtual: any = '';

  public offset: any = 0;
  public limit: any = 20;

  ngOnInit(): void {
    this.listarPokemon(this.offset, this.limit);
    /*
    this.variavelBusca = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.searchPokemon = queryParams.searchKey;
        console.log('dados do subscribe do queryParams:');
        console.log(queryParams);
        console.log(this.searchPokemon);
        console.log('está rodando o filtro depois do query'), this.obterPokemon();
      },
    );
    */
  }


  /*
  ngDoCheck(): void {
    if (this.searchPokemon !== this.searchComparator) {
      this.obterPokemon();
      this.searchComparator = this.searchPokemon;
    }
  }
  */


  listarPokemon(offset: any, limit: any): any {

    const listando = this.listarPokemonService.listarPokemon(offset, limit).pipe(first());
    listando.subscribe( data =>
      data.results.forEach(element => {
        this.listaDePokemons.push(element.name);
        this.pokemonAtual = element.name;
        this.getQuery();
      }),
    );
    /*
    this.listagem = this.listarPokemonService.listarPokemon(offset, limit).subscribe(data =>
      data.results.forEach(element => {
        this.listaDePokemons.push(element.name);
        this.pokemonAtual = element.name;
        // console.log('listaLength:', this.listaDePokemons.length);
        this.getQuery();
      })
    );*/

  }

  getQuery(): void {
    /*
    const dataFirst = this.route.queryParams.pipe(first());
    dataFirst.subscribe(
      (queryParams: any) => {
        this.searchPokemon = queryParams.searchKey;
        console.log('Valor do searchPokemon dentro do componente de Listagem:');
        console.log(this.searchPokemon);
      },
    );
    */
    console.log('ta na query');
    this.variavelBusca = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.searchPokemon = queryParams.searchKey;
        // console.log('Valor do searchPokemon dentro do componente de Listagem:');
        // console.log(this.searchPokemon);
        this.obterPokemon();
      },
    );
  }

  // retorna o elemento que combina com o filtro searchPokemon
  obterPokemon(): any {

    console.log('Rodando o obterPokemon()', 'searchPokemon: ', this.searchPokemon, 'listaDePokemons.length:', this.listaDePokemons.length);

    if (! (this.listaDePokemons.length === 0 || ! this.searchPokemon) ) {
      this.listaDeApresentacao = [];
      this.listaDeApresentacao = this.listaDePokemons.filter(pokemon => {
        return pokemon === this.searchPokemon;
      });
      console.log('listaDeApresentacao length: ', this.listaDeApresentacao.length);
      if (this.listaDeApresentacao.length === 0){
        this.errorMessage = 'Pokemon Não Encontrado :(  Clique na Pokedex para voltar ao menu!';
        // this.router.navigate(['']);
      }
    } else {
      this.listaDeApresentacao = [];
      this.listaDeApresentacao = this.listaDePokemons;
    }
  }

  ngOnDestroy(): void {
    // this.listagem.unsubscribe();
    this.variavelBusca.unsubscribe();
  }

}
