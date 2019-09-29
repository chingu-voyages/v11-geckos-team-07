import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { map } from "rxjs/operators";
import { RateExchangeService } from "./rate-exchange.service";
@Injectable({
  providedIn: "root"
})
export class CurrenciesResolverService implements Resolve<any> {
  constructor(private rateExchangeService: RateExchangeService) {}
  resolve() {
    return this.rateExchangeService
      .getAvailableCurrencies()
      .pipe(map(currencies => currencies));
  }
}
