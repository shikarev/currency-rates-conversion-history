import { createAsyncThunk } from '@reduxjs/toolkit'
import { currencyApi } from 'shared/api'
import { HistoryTable } from 'entities/HistoryQuotes/model/types/history'
import cuid from 'cuid'

export const fetchHistoryQuotes = createAsyncThunk<HistoryTable[], void, { rejectValue: string}>(
  'history/fetchHistoryQuotes',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const data = await dispatch(currencyApi.endpoints.history.initiate()).unwrap()
      const HistoryTable = data.deals.map((item) => ({ ...item, id: cuid() }))

      return HistoryTable
    } catch (e) {
      console.log(e)
      return rejectWithValue('error')
    }
  },
)
