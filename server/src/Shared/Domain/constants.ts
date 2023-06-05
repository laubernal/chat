export type ErrorSerialization = {
  errorType: string;
  errorCode: number;
  occurredOn: Date;
  message: string;
  stack?: string[];
};

export enum ErrorCode {
  DATA_FORMAT = 0,
  NOT_FOUND = 1,
  EXTERNAL_PROVIDER_ERROR = 2,
  APPLICATION_ERROR = 3,
  AUTHORIZATION_ERROR = 4,
}
