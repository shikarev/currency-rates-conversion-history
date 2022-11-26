import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Table } from 'entities/ExchangeRate/model/types/exchangeRate'
import { converterSchema } from '../types/converter'

const initialState: converterSchema = {
  amount: '',
  first: '',
  firstItems: [],
  second: '',
  secondItems: [],
  isLoading: false,
  total: '',
}

export const converterSlice = createSlice({
  name: 'converter',
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<string>) => {
      state.amount = action.payload
    },

    setFirst: (state, action: PayloadAction<string>) => {
      state.first = action.payload
    },

    setSecond: (state, action: PayloadAction<string>) => {
      state.second = action.payload
    },

    setFirstItems: (state, action: PayloadAction<Table[]>) => {
      const firstPair = action.payload.map((item) => (
        item.asset.split('/')[0]
      ))
      const filteredItem = firstPair.filter((element, index) => firstPair.indexOf(element) === index)
      state.firstItems = filteredItem

      const firstInArray = filteredItem[0]
      state.first = firstInArray

      const secondFilter = action.payload.map((item) => (
        item.asset
      )).filter((item) => item.includes(`${firstInArray}/`))

      const secondPair = secondFilter.map((item) => (
        item.split('/')[1]
      ))

      const secondChoose = secondFilter[0].split('/')[1]

      state.second = secondChoose
      state.secondItems = secondPair
    },

    setSecondItems: (state, action: PayloadAction<string[]>) => {
      const secondPair = action.payload.map((item) => (
        item.split('/')[1]
      ))
      state.secondItems = secondPair
    },

    setTotal: (state, action: PayloadAction<string>) => {
      state.total = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { actions: converterActions } = converterSlice
export const { reducer: converterReducer } = converterSlice
