import { Component, OnInit } from "@angular/core";
import { RateExchangeService } from "../services/rate-exchange.service";

@Component({
  selector: "app-real-time-rate-exchange",
  templateUrl: "./real-time-rate-exchange.component.html",
  styleUrls: ["./real-time-rate-exchange.component.css"]
})
export class RealTimeRateExchangeComponent implements OnInit {
  currencies: string[];
  constructor(private rateExchangeService: RateExchangeService) {}

  ngOnInit() {
    this.rateExchangeService.getAvailableCurrencies().subscribe(data => {
      this.currencies = data; // It initializes the dropdowns with available currencies
    });

    this.rateExchangeService.getExchangeRate("USD", "GBP").subscribe(data => {
      console.log(data); // It's here just for testing, in future this will be in the calculating result function
    });
  }

  selectCurrency(currency: string) {
    console.log(currency);
  }
}
