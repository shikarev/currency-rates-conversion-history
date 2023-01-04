import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchHistoryQuotes } from 'entities/HistoryQuotes/model/services/fetchHistoryQuotes/fetchHistoryQuotes'
import { HistoryQuotesData, HistoryQuotesSchema } from '../types/history'

const initialState: HistoryQuotesSchema = {
  isLoading: false,
  error: undefined,
}

export const historyQuotesSlice = createSlice({
  name: 'historyQuotesSlice',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHistoryQuotes.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchHistoryQuotes.fulfilled, (state, action: PayloadAction<HistoryQuotesData[]>) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchHistoryQuotes.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

// Action creators are generated for each case reducer function
export const { actions: historyQuotesActions } = historyQuotesSlice
export const { reducer: historyQuotesReducer } = historyQuotesSlice
