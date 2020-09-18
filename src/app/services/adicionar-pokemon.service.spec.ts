import { TestBed } from '@angular/core/testing';

import { AdicionarPokemonService } from './adicionar-pokemon.service';

describe('AdicionarPokemonService', () => {
  let service: AdicionarPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdicionarPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
