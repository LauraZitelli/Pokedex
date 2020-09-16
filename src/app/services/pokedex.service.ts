import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private pokeApiUrl: string = environment.pokeApiUrl;
  public names$: Observable<any[]>;
  public index: any = 0;

  constructor(private http: HttpClient) {
  }

  // método que faz o request para a API da lista completa de pokemons
  getPokemons(): Observable<any> {
    return this.http.get<any>(`${this.pokeApiUrl}/pokemon?offset=0&limit=1050`);
  }

  // faz o request do Pokemon cujo id é passado por parametro
  getPokemonsById(id: any): Observable <any> {
    return this.http.get<any>(`${this.pokeApiUrl}/pokemon/${id}`);
  }

  // faz request do Pokemon que possui o nome passado por parametro
  getPokemonsByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.pokeApiUrl}/pokemon/${name}`);
  }

  getPokemonsNames(): Observable<any[]> {
    this.getPokemons().subscribe(data => {
      data.results.forEach(item => {
        this.names$[this.index] = this.http.get<string[]>(`${this.pokeApiUrl}/pokemon/${item.name}`);
        console.log(this.names$);
        this.index++;
      });
    });
    return this.names$;
  }
}

/* isso aqui dentro de listPokemons funciona!
  this.getPokemons().subscribe(data => { data.results.forEach(element => {
      this.pokemons[this.i] = element.name;
      this.i++;
    });
    });
    return this.pokemons;
*/

/*
    getPokemonsName(): string[] {
    this.getPokemons().subscribe(data => {
      data.results.forEach(item => {
        // console.log(item.name);
        // this.names$ = this.http.get<any>(`${this.pokeApiUrl}/pokemon/${item.name}`);
        // console.log(this.names$);
        this.names[this.index] = item.name;
        this.index++;
      });
    });
    // console.log(this.names);
    return this.names;
  }
*/