import { ApiErrorHandlerService } from "./../../api-interface/api-manager/ApiErrorHandler.service";
import { LoginModel } from "../../api-interface/data-model/login/LoginModel";
import { LoginResponse } from "../../api-interface/data-model/login/LoginResponse";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(loginModel: LoginModel): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>("http://localhost:8090/api/crc/login", loginModel)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    // Return an observable with a user-facing error message.
    return throwError(error);
  }
}
