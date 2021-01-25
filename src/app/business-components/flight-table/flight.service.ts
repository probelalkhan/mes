import { SortModel } from "./../../api-interface/data-model/flights/SortModel";
import { FlightRequest } from "./../../api-interface/data-model/flights/FlightRequest";
import { FlightResponse } from "./../../api-interface/data-model/flights/FlightResponse";
import { throwError } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FlightService {
  constructor(private http: HttpClient) {}

  getAllFlights() {
    return this.http
      .get<FlightResponse>("http://localhost:8090/api/flights/getAllFlights")
      .pipe(catchError(this.handleError));
  }

  getAllFlightsCondditionally(sortModels: SortModel[]) {
    let flightRequest = new FlightRequest();
    flightRequest.sortOn = sortModels;

    return this.http
      .post<FlightResponse>(
        "http://localhost:8090/api/flights/getAllFlightsConditionally",
        flightRequest
      )
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    // Return an observable with a user-facing error message.
    return throwError(error);
  }
}
