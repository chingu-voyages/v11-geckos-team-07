import { Component, OnInit } from "@angular/core";
import { RateExchangeService } from "../services/rate-exchange.service";
import { stringify } from "@angular/compiler/src/util";

@Component({
  selector: "app-real-time-rate-exchange",
  templateUrl: "./real-time-rate-exchange.component.html",
  styleUrls: ["./real-time-rate-exchange.component.css"]
})
export class RealTimeRateExchangeComponent implements OnInit {
  currencies: string[];
  baseCurrency: string;
  resultCurrency: string;
  amount: string;
  result: number;
  last_updated: string;

  constructor(private rateExchangeService: RateExchangeService) {}

  ngOnInit() {
    this.rateExchangeService.getAvailableCurrencies().subscribe(data => {
      this.currencies = data; // It initializes the dropdowns with available currencies
      this.baseCurrency = this.currencies[0];
      this.resultCurrency = this.currencies[0];
    });
  }

  selectBaseCurrency(currency: string) {
    this.baseCurrency = currency;
  }

  selectResultCurrency(currency: string) {
    this.resultCurrency = currency;
  }

  switchCurrency() {
    let temp: string;
    temp = this.baseCurrency;
    this.baseCurrency = this.resultCurrency;
    this.resultCurrency = temp;
  }

  convert() {
    if (this.amount) {
      this.rateExchangeService
        .getExchangeRate(this.baseCurrency, this.resultCurrency)
        .subscribe(data => {
          this.result = data.rate * parseInt(this.amount);
          this.last_updated = data.date;
        });
    } else {
      this.result = 0;
    }
  }
}
