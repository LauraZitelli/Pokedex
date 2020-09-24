import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdicionarPokemonService {

  constructor(private http: HttpClient) { }

  adicionarPokemon(nome: string): any {
    try {
      return this.http.get(`${environment.url}/pokemon/${nome}`);
    }
    catch {
      alert('Pokemon não encontrado');
    }
  }
}
