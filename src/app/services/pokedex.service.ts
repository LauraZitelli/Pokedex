import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private pokeApiUrl: string = environment.pokeApiUrl;
  public pokemons = [];
  public i = 0;

  constructor(private http: HttpClient) {
  }

  // método que faz o request para a API
  getPokemons(): Observable<any> {
    return this.http.get<any>(`${this.pokeApiUrl}`);
  }

  // método que retorna um array do tipo [ 0: 'bulbasaur', 1: 'ivysaur' ]
  listPokemons(): string[] {
    this.getPokemons().subscribe(data => { data.results.forEach(element => {
      this.pokemons[this.i] = element.name;
      this.i++;
    });
    });
    return this.pokemons;
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
