import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { RealTimeRateExchangeComponent } from "./real-time-rate-exchange/real-time-rate-exchange.component";
import { FooterComponent } from "./footer/footer.component";
import { SpecificDateRateExchangeComponent } from "./specific-date-rate-exchange/specific-date-rate-exchange.component";
import { HomeComponent } from "./home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RealTimeRateExchangeComponent,
    FooterComponent,
    SpecificDateRateExchangeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
