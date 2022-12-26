export interface LoginSchema {
  login: string
  password: string
  isLoading: boolean
  error?: string
  isValid?: boolean
}

export interface LoginProps {
  login: string,
  password: string
}
