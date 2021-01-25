import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-mes-nav-bar",
  templateUrl: "./mes-nav-bar.component.html",
  styleUrls: ["./mes-nav-bar.component.scss"],
})
export class MesNavBarComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any>("http://localhost:8090/api/userManagement/getAllUsers")
      .pipe(catchError(this.handleError))
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  handleError(error: HttpErrorResponse) {
    // Return an observable with a user-facing error message.
    console.log(error);
    return throwError(error);
  }
}
