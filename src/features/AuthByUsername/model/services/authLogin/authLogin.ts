import { createAsyncThunk } from '@reduxjs/toolkit'
import { Response, ResultStatus, userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice'

export const authLogin = createAsyncThunk<void, Response>(
  'auth/login',
  async (response, { dispatch }) => {
    const data = await response
    if (data.result === ResultStatus.OK) {
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data))
      dispatch(userActions.setAuthData(data))
    }

    if (data.result === ResultStatus.ERROR) {
      dispatch(loginActions.setError(data.error || 'Неизвестная ошибка'))
    }
  },
)
