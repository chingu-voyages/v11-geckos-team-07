import { TestBed } from '@angular/core/testing';

import { RateExchangeServiceService } from './rate-exchange-service.service';

describe('RateExchangeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RateExchangeServiceService = TestBed.get(RateExchangeServiceService);
    expect(service).toBeTruthy();
  });
});
