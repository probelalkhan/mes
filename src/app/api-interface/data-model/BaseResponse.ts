export class BaseResponse {
  code: Number;
  subCode: Number;
  subCodeDetail: String;
  timeStamp: String;
  success: Boolean;
}

// "code": 200,
// "subCode": 200,
// "subCodeDetail": "success",
// "timeStamp": "2020-12-23 13:01:57",
// "data": {
//     "userId": 1.0,
//     "accessToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYW1rdWsiLCJyb2xlIjoiUm9sZU5hbWUiLCJleHAiOjE2MDg3OTUxMTYsImlhdCI6MTYwODcwODcxNn0.MyqWHpw1bMRt6Ol9ZDcY5IiofwsKytgQA_GAKClUq4fSF4taRqVcMPiR95m_Mln01Pd_IFOxq5hBD-vbgv7Q8w"
// },
// "success": true
