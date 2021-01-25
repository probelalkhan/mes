import { LoginModel } from "../../api-interface/data-model/login/LoginModel";
import { ErrorResponse } from "./../../api-interface/data-model/ErrorResponse";
import { ApiErrorHandlerService } from "./../../api-interface/api-manager/ApiErrorHandler.service";
import { HttpErrorResponse } from "@angular/common/http";
import { LocalStorageService } from "./../../core-services/core-utility/LocalStorageService";
import { LoginService } from "./login.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ErrorStateMatcher } from "@angular/material/core";
import { FormControl, FormGroupDirective, NgForm } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  username: String = "";
  password: String = "";
  hide = true;
  errorMessage: String = "";
  loginModel = new LoginModel("", "");
  loginForm: NgForm;

  formErrorHandler: ApiErrorHandlerService = <any>{
    handleError: (error: HttpErrorResponse): void => {
      console.log(error);
    },
  };

  constructor(
    private loginService: LoginService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  // Click event listeners

  clearError() {
    this.errorMessage = "";
  }

  isFormValid(): boolean {
    //For now, just checking if both username and password are not empty
    return (
      this.loginModel.username.length > 0 && this.loginModel.password.length > 0
    );
  }

  /**
   * This method is called when we press the go button on the login page
   */
  onSubmit(loginForm: NgForm) {
    if (!this.isFormValid()) {
      console.log("Form not valid!!");
      return;
    }

    this.loginService.login(this.loginModel).subscribe(
      (response) => {
        //TODO - REMOVE THIS CONSOLE LOG
        console.log("Response token returned = " + response.data.accessToken);

        //Storing the jwt token in local storage and routing the user to home
        this.localStorageService.set(
          "ACCESS_TOKEN",
          response.data.accessToken.toString()
        );

        //Navigate to home page
        this.router.navigate(["/home"]);
      },
      (error) => {
        let errorResponse = error.error as ErrorResponse;

        if (errorResponse != null && errorResponse.subCode != null) {
          switch (errorResponse.subCode) {
            case 18:
              this.errorMessage = "Username does not exist";
              break;
            case 20:
              this.errorMessage = "Password does not match";
              break;
            default:
              //Show pop up
              console.log("Show pop up");
          }
        } else {
          this.errorMessage = "Some error occurred!!";
        }
        console.log("Error in comp : " + errorResponse.errorDescription);
      }
    );
  }
}
