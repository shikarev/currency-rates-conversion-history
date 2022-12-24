import { createAsyncThunk } from '@reduxjs/toolkit'
import { ResultStatus, userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice'
import { authApi } from 'features/AuthByUsername/api/authApi'
import { loginProps } from 'features/AuthByUsername'

export const authLogin = createAsyncThunk<void, loginProps>(
  'authApi/login',
  async ({ login, password }, { dispatch }) => {
    const data = await dispatch(authApi.endpoints.login.initiate({ login, password })).unwrap()

    if (data.result === ResultStatus.OK) {
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data))
      dispatch(userActions.setAuthData(data))
    }

    if (data.result === ResultStatus.ERROR) {
      dispatch(loginActions.setError(data.error || 'Неизвестная ошибка'))
    }
  },
)
