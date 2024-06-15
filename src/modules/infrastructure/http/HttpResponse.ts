export interface HttpSuccessfulResponse<ResponseType> {
  status: 'successful';
  response?: ResponseType;
}

export interface HttpFailedResponse {
  status: 'failed';
  errorMessage: string;
}

export type HttpResponse<ResponseType> = HttpSuccessfulResponse<ResponseType> | HttpFailedResponse;
