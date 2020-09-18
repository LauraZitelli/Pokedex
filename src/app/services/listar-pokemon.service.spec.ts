import { TestBed } from '@angular/core/testing';

import { ListarPokemonService } from './listar-pokemon.service';

describe('ListarPokemonService', () => {
  let service: ListarPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
