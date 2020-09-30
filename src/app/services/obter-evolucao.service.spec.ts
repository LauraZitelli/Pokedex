import { TestBed } from '@angular/core/testing';

import { ObterEvolucaoService } from './obter-evolucao.service';

describe('ObterEvolucaoService', () => {
  let service: ObterEvolucaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObterEvolucaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
