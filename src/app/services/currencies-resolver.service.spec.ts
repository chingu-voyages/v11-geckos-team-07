import { TestBed } from '@angular/core/testing';

import { CurrenciesResolverService } from './currencies-resolver.service';

describe('CurrenciesResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrenciesResolverService = TestBed.get(CurrenciesResolverService);
    expect(service).toBeTruthy();
  });
});
