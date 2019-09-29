import { Component, OnInit, Output } from "@angular/core";
import { RateExchangeService } from "../services/rate-exchange.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  currencies: string[];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.currencies = this.route.snapshot.data["currencies"];
  }
}
