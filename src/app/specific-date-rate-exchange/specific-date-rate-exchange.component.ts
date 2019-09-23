import { Component, OnInit } from "@angular/core";
import { RateExchangeService } from "../services/rate-exchange.service";

@Component({
  selector: "app-specific-date-rate-exchange",
  templateUrl: "./specific-date-rate-exchange.component.html",
  styleUrls: ["./specific-date-rate-exchange.component.css"]
})
export class SpecificDateRateExchangeComponent implements OnInit {
  currencies: string[];
  baseCurrency: string;
  resultCurrency: string;
  model;
  constructor(private rateExchangeService: RateExchangeService) {}

  ngOnInit() {
    this.rateExchangeService.getAvailableCurrencies().subscribe(data => {
      this.currencies = data; // It initializes the dropdowns with available currencies
      this.baseCurrency = this.currencies[0];
      this.resultCurrency = this.currencies[0];
    });

    this.rateExchangeService.getExchangeRate("USD", "GBP").subscribe(data => {
      console.log(data); // It's here just for testing, in future this will be in the calculating result function
    });
  }

  selectBaseCurrency(currency: string) {
    this.baseCurrency = currency;
  }

  selectResultCurrency(currency: string) {
    this.resultCurrency = currency;
  }

  convert() {
    console.log(this.model); // just to verify that we get the date from the picker
  }
}
