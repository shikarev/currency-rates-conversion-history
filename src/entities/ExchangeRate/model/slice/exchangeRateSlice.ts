import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import cuid from 'cuid'
import { fetchCurrencyPairs } from '../services/fetchCurrencyPairs/fetchCurrencyPairs'
import { ExchangeRate, ExchangeRateSchema } from '../types/exchangeRate'

const initialState: ExchangeRateSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
}

export const exchangeRateSlice = createSlice({
  name: 'exchangeRate',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencyPairs.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchCurrencyPairs.fulfilled, (state, action: PayloadAction<ExchangeRate>) => {
        state.isLoading = false
        state.data = { ...action.payload, assets: action.payload.assets.map((item) => ({ ...item, id: cuid() })) }
      })
      .addCase(fetchCurrencyPairs.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

// Action creators are generated for each case reducer function
export const { actions: exchangeRateActions } = exchangeRateSlice
export const { reducer: exchangeRateReducer } = exchangeRateSlice
