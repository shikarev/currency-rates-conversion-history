import { createAsyncThunk } from '@reduxjs/toolkit'
import { currencyApi } from 'shared/api'
import { CurrencyPair } from 'entities/ExchangeRate/model/types/exchangeRate'
import cuid from 'cuid'

export const fetchCurrencyPairs = createAsyncThunk<CurrencyPair[], void, { rejectValue: string}>(
  'quotes/fetchCurrencyPairs',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const data = await dispatch(currencyApi.endpoints.quotes.initiate()).unwrap()

      const currencyPair = data.assets.map((item) => ({ ...item, id: cuid(), favorite: false }))

      return currencyPair
    } catch (e) {
      console.log(e)
      return rejectWithValue('error')
    }
  },
)
