export interface LoginSchema {
  login: string
  password: string
  isLoading: boolean
  error?: string
  isValid?: boolean
}

export interface loginProps {
  login: string,
  password: string
}
