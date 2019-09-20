import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dropdown-currency",
  templateUrl: "./dropdown-currency.component.html",
  styleUrls: ["./dropdown-currency.component.css"]
})
export class DropdownCurrencyComponent implements OnInit {
  currencies: string[] = ["EUR", "USA", "CZK"]; //In future it will get currencies from api
  constructor() {}

  ngOnInit() {}

  selectCurrency(currency: string) {
    console.log(currency);
  }
}
