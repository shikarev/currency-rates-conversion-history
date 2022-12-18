import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { loginByResponse } from '../services/loginByResponse/loginByResponse'
import { LoginSchema } from '../types/loginSchema'

const emailRegex = /^[-+\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,30}$/
const passwordRegex = /(?=(.*[0-9]))(?=.*[_])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{7,}$/

const initialState: LoginSchema = {
  login: '',
  password: '',
  isLoading: false,
  validation: false,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
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
        state.validation = false
      } else {
        state.validation = true
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByResponse.pending, (state) => {
        state.error = undefined
        state.isLoading = true
        state.validation = false
      })
      .addCase(loginByResponse.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(loginByResponse.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

// Action creators are generated for each case reducer function
export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice
