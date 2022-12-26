export enum RESULT_STATUS {
  OK = 'ok',
  ERROR = 'error',
}

export interface UserResponse {
  result: RESULT_STATUS
  error?: string | undefined
}

export interface UserSchema {
  authData?: UserResponse
}
