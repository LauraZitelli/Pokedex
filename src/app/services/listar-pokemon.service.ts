import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListarPokemonService {

  constructor(private http: HttpClient) { }

  listarPokemon(offset: any, limit: any): any {
    return this.http.get(`${environment.url}/pokemon?offset=${offset}&limit=${limit}`);
  }
}
