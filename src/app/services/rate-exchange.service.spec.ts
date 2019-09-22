import { TestBed } from "@angular/core/testing";

import { RateExchangeService } from "./rate-exchange.service";

describe("RateExchangeServiceService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: RateExchangeService = TestBed.get(RateExchangeService);
    expect(service).toBeTruthy();
  });
});
