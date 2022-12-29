import { createAsyncThunk } from '@reduxjs/toolkit'
import { currencyApi } from 'shared/api'
import { TransformedCurrencyPair } from 'entities/Converter/model/types/converter'

export const fetchConverterCurrencyPairs = createAsyncThunk<TransformedCurrencyPair[], void, { rejectValue: string}>(
  'quotes/fetchConverterCurrencyPairs',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const data = await dispatch(currencyApi.endpoints.quotes.initiate()).unwrap()

      const currencyPair = data.assets.map((item) => {
        const [from, to] = item.asset.split('/')

        return ({
          asset: { from, to },
          quote: Number(item.quote),
        })
      })

      return currencyPair
    } catch (e) {
      console.log(e)
      return rejectWithValue('error')
    }
  },
)
