import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import cuid from 'cuid'
import { fetchHistoryQuotes } from 'entities/HistoryQuotes/model/services/fetchHistoryQuotes/fetchHistoryQuotes'
import { HistoryQuotes, HistoryQuotesSchema } from '../types/history'

const initialState: HistoryQuotesSchema = {
  data: [],
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
      .addCase(fetchHistoryQuotes.fulfilled, (state, action: PayloadAction<HistoryQuotes>) => {
        state.isLoading = false
        state.data = action.payload.deals.map((item) => ({ ...item, id: cuid() }))
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
