export enum ResultStatus {
  OK = 'ok',
  ERROR = 'error',
}

export interface Response {
  result: ResultStatus
  error?: string
}

export interface UserSchema {
  authData?: Response
}
