import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-real-time-rate-exchange",
  templateUrl: "./real-time-rate-exchange.component.html",
  styleUrls: ["./real-time-rate-exchange.component.css"]
})
export class RealTimeRateExchangeComponent implements OnInit {
  currencies: string[] = ["EUR", "USA", "CZK"]; //In future it will get currencies from api
  constructor() {}

  ngOnInit() {}

  selectCurrency(currency: string) {
    console.log(currency);
  }
}
