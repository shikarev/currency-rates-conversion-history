export interface LoginSchema {
  login: string
  password: string
  error?: string
  isValid?: boolean
}

export interface loginProps {
  login: string,
  password: string
}
