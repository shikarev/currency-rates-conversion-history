import { createAsyncThunk } from '@reduxjs/toolkit'
import { RESULT_STATUS, userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import { loginActions } from 'features/UserAuth/model/slice/loginSlice'
import { LoginProps, authApi } from 'features/UserAuth'

export const authLogin = createAsyncThunk<void, LoginProps>(
  'authApi/login',
  async ({ login, password }, { dispatch }) => {
    const data = await dispatch(authApi.endpoints.login.initiate({ login, password })).unwrap()

    if (data.result === RESULT_STATUS.OK) {
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data))
      dispatch(userActions.setAuthData(data))
    }

    if (data.result === RESULT_STATUS.ERROR) {
      dispatch(loginActions.setError(data.error ?? 'Неизвестная ошибка'))
    }
  },
)
