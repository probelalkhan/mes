import { FlightResponseData } from "./FlightResponseData";
export class FlightResponse {
  code: Number;
  subCode: Number;
  subCodeDetail: String;
  timeStamp: String;
  success: Boolean;
  data: FlightResponseData;
}
