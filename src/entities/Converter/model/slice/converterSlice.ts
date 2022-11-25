import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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

    setFirstItems: (state, action: PayloadAction<any>) => {
      state.firstItems = action.payload
    },

    setSecondItems: (state, action: PayloadAction<any>) => {
      state.secondItems = action.payload
    },

    setTotal: (state, action: PayloadAction<string>) => {
      state.total = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { actions: converterActions } = converterSlice
export const { reducer: converterReducer } = converterSlice
