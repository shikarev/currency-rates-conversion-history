export enum ResultStatus {
  OK = 'ok',
  ERROR = 'error',
}

export interface Response {
  result: ResultStatus
  error?: string | undefined
}

export interface UserSchema {
  authData?: Response
  initialized: boolean;
}
