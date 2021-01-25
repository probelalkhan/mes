import { LoginResponseData } from "./LoginResponseData";

export class LoginResponse {
  code: Number;
  subCode: Number;
  subCodeDetail: String;
  timeStamp: String;
  success: Boolean;
  data: LoginResponseData;
}
