import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { loginByResponse } from '../services/loginByResponse/loginByResponse'
import { LoginSchema } from '../types/loginSchema'

const initialState: LoginSchema = {
  login: '',
  password: '',
  isLoading: false,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.login = action.payload
      state.error = undefined
    },

    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
      state.error = undefined
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByResponse.pending, (state) => {
        state.error = undefined
        state.isLoading = true
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
