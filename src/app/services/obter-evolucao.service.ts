import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ObterEvolucaoService {

  constructor(private http: HttpClient) { }

  obterEvolucao(key: string): any {
    try {
      return this.http.get(`${environment.url}/evolution-chain/${key}`);
    }
    catch {
      alert('Pokemon não encontrado');
    }
  }
}
