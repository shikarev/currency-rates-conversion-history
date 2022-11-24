import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { HistoryQuotes } from 'entities/HistoryQuotes'

export const fetchHistoryQuotes = createAsyncThunk<HistoryQuotes, void, { rejectValue: string}>(
  'history/fetchHistory',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post<HistoryQuotes>('https://test-front-spa.mmtestprojectsfactory.com/api/', {
        action: 'history',
      })

      return response.data
    } catch (e) {
      console.log(e)
      return thunkAPI.rejectWithValue('error')
    }
  },
)
