import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap, catchError, map } from "rxjs/operators";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RateExchangeService {
  private url: string = "https://api.ratesapi.io/api/";
  constructor(private http: HttpClient) {}

  getAvailableCurrencies(): Observable<string[]> {
    return this.http.get<any>(`${this.url}latest`).pipe(
      map((data: any) => {
        return Object.keys(data.rates);
      })
    );
  }

  getExchangeRate(base: string, symbols: string): Observable<any> {
    const params = new HttpParams().set("base", base).set("symbols", symbols);
    return this.http.get<any>(`${this.url}latest`, { params }).pipe(
      map(data => {
        return data.rates[symbols];
      })
    );
  }
}
