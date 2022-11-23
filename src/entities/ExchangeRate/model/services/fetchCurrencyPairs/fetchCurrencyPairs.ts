import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCurrencyPairs = createAsyncThunk<any, void, { rejectValue: string}>(
  'quotes/fetchCurrencyPairs',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post<any>('https://test-front-spa.mmtestprojectsfactory.com/api/', {
        action: 'quote',
      })

      console.log(response)

      return response.data
    } catch (e) {
      console.log(e)
      return thunkAPI.rejectWithValue('error')
    }
  },
)
