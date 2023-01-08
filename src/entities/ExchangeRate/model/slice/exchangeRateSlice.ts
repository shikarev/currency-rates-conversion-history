import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchExchangeRateItems } from 'entities/ExchangeRate/model/services/fetchCurrencyPairs/fetchCurrencyPairs'
import { ExchangeRateItem, ExchangeRateSchema } from '../types/exchangeRate'

const initialState: ExchangeRateSchema = {
  isLoading: false,
  error: undefined,
  table: [],
}

export const exchangeRateSlice = createSlice({
  name: 'exchangeRate',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<string>) => {
      const findIndex = state.table.findIndex((item: { id: string }) => item.id === action.payload)

      if (findIndex >= 0) {
        state.table[findIndex].favorite = true
        state.table.unshift(state.table.splice(findIndex, 1)[0])
      }
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      const findIndex = state.table.findIndex((item: { id: string }) => item.id === action.payload)

      if (findIndex >= 0) {
        state.table[findIndex].favorite = false
        state.table.push(state.table.splice(findIndex, 1)[0])
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExchangeRateItems.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchExchangeRateItems.fulfilled, (state, action: PayloadAction<ExchangeRateItem[]>) => {
        state.isLoading = false
        state.table = action.payload
      })
      .addCase(fetchExchangeRateItems.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

// Action creators are generated for each case reducer function
export const { actions: exchangeRateActions } = exchangeRateSlice
export const { reducer: exchangeRateReducer } = exchangeRateSlice
