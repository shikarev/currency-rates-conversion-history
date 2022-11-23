import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Response, userActions } from 'entities/User'
import { ResultStatus } from 'entities/User/model/types/user'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

interface loginByResponseProps {
  login: string,
  password: string
}

export const loginByResponse = createAsyncThunk<Response, loginByResponseProps, { rejectValue: string}>(
  'login/loginByResponse',
  async ({ login, password }, thunkAPI) => {
    try {
      const response = await axios.post<Response>('https://test-front-spa.mmtestprojectsfactory.com/api/', {
        action: 'login',
        login,
        password,
      })

      console.log(response)

      if (!response.data) {
        throw new Error()
      }

      if (response.data.result === ResultStatus.ERROR) {
        return thunkAPI.rejectWithValue(response.data.error || '')
      }

      if (response.data.result === ResultStatus.OK) {
        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
        thunkAPI.dispatch(userActions.setAuthData(response.data))
      }

      return response.data
    } catch (e) {
      console.log(e)
      return thunkAPI.rejectWithValue('error')
    }
  },
)
