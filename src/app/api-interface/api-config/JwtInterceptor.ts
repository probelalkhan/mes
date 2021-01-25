import { LocalStorageService } from "./../../core-services/core-utility/LocalStorageService";
import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let accessToken = localStorage.getItem("ACCESS_TOKEN");

    if (accessToken != null && (accessToken as String).length > 0) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } else {
      console.log("No access token found!!");
    }

    return next.handle(request);
  }
}
