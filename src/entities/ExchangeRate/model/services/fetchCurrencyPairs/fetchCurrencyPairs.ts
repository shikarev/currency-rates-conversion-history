import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { ExchangeRate } from 'entities/ExchangeRate'

export const fetchCurrencyPairs = createAsyncThunk<ExchangeRate, void, { rejectValue: string}>(
  'quotes/fetchCurrencyPairs',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post<ExchangeRate>('https://test-front-spa.mmtestprojectsfactory.com/api/', {
        action: 'quote',
      })

      return response.data
    } catch (e) {
      console.log(e)
      return thunkAPI.rejectWithValue('error')
    }
  },
)
