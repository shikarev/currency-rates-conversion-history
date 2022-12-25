export enum ResultStatus {
  OK = 'ok',
  ERROR = 'error',
}

export interface UserResponse {
  result: ResultStatus
  error?: string | undefined
}

export interface UserSchema {
  authData?: UserResponse
}
