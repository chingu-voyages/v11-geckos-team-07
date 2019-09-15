import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RealTimeRateExchangeComponent } from './real-time-rate-exchange/real-time-rate-exchange.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RealTimeRateExchangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
