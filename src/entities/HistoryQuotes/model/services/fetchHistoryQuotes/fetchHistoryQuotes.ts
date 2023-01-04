import { createAsyncThunk } from '@reduxjs/toolkit'
import { currencyApi } from 'shared/api'
import { HistoryTableData } from 'entities/HistoryQuotes/model/types/history'
import cuid from 'cuid'

export const fetchHistoryQuotes = createAsyncThunk<HistoryTableData[], void, { rejectValue: string}>(
  'history/fetchHistoryQuotes',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const data = await dispatch(currencyApi.endpoints.history.initiate()).unwrap()
      const historyTableData = data.deals.map((item) => ({ ...item, id: cuid() }))

      return historyTableData
    } catch (error) {
      console.log(error)
      return rejectWithValue('error')
    }
  },
)
