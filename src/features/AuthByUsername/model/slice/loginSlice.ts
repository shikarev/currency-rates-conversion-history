import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/loginSchema'

const emailRegex = /^[-+\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,30}$/
export const passwordRegex = /(?=[\w]+$)(?=.{7,}).*$/

const initialState: LoginSchema = {
  login: '',
  password: '',
  isValid: false,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<string>) => {
      state.login = action.payload
      state.error = undefined
      if (!state.login.match(emailRegex)) {
        state.error = 'Некорректный формат адреса электронной почты'
      }
    },

    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
      state.error = undefined

      if (!state.password.match(passwordRegex)) {
        // eslint-disable-next-line max-len
        state.error = 'Не менее 7 символов, содержащих латинские буквы верхнего и нижнего регистра и цифры, без спец. символов, кроме "_"'
        state.isValid = false
      } else {
        state.isValid = true
      }
    },

    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice
