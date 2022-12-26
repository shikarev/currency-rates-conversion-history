import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserResponse, UserSchema } from '../types/user'

const initialState: UserSchema = {

}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<UserResponse>) => {
      state.authData = action.payload
    },
    logout: (state) => {
      state.authData = undefined
    },
  },
})

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
