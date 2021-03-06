import { Component, OnInit, Input } from "@angular/core";
import { RateExchangeService } from "../services/rate-exchange.service";

@Component({
  selector: "app-specific-date-rate-exchange",
  templateUrl: "./specific-date-rate-exchange.component.html",
  styleUrls: ["./specific-date-rate-exchange.component.css"]
})
export class SpecificDateRateExchangeComponent implements OnInit {
  @Input() currencies: string[];
  baseCurrency: string;
  resultCurrency: string;
  rate: number;
  amount: string;
  result: number;
  model = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate()
  };

  constructor(private rateExchangeService: RateExchangeService) {}

  ngOnInit() {
    this.baseCurrency = this.currencies[0];
    this.resultCurrency = this.currencies[0];
  }

  selectBaseCurrency(currency: string) {
    this.baseCurrency = currency;
  }

  selectResultCurrency(currency: string) {
    this.resultCurrency = currency;
  }

  convert() {
    let date = `${this.model.year}-${this.model.month}-${this.model.day}`;
    if (this.amount) {
      this.rateExchangeService
        .getSpecificDateExchangeRate(
          date,
          this.baseCurrency,
          this.resultCurrency
        )
        .subscribe(data => {
          this.result = parseInt(this.amount) * data;
        });
    } else {
      this.result = 0;
    }
  }

  switchCurrency() {
    let temp: string;
    temp = this.baseCurrency;
    this.baseCurrency = this.resultCurrency;
    this.resultCurrency = temp;
  }
}
