import { createAsyncThunk } from '@reduxjs/toolkit'
import { currencyApi } from 'shared/api'
import { HistoryQuotesData } from 'entities/HistoryQuotes/model/types/history'

export const fetchHistoryQuotes = createAsyncThunk<HistoryQuotesData[], void, { rejectValue: string}>(
  'history/fetchHistoryQuotes',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const data = await dispatch(currencyApi.endpoints.history.initiate()).unwrap()
      const historyQuotesData = data.deals.map((item) => (
        { ...item, id: item.asset + item.startDate + item.finishDate }
      ))

      return historyQuotesData
    } catch (error) {
      console.log(error)
      return rejectWithValue('error')
    }
  },
)
