import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ConverterSchema } from '../types/converter'

const initialState: ConverterSchema = {
  amount: '',
  assetFrom: '',
  fromAssetsList: [],
  assetTo: '',
  toAssetsList: [],
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

    setAssetFrom: (state, action: PayloadAction<string>) => {
      state.assetFrom = action.payload
    },

    setFromAssetsList: (state, action: PayloadAction<string[]>) => {
      state.fromAssetsList = action.payload
    },

    setAssetTo: (state, action: PayloadAction<string>) => {
      state.assetTo = action.payload
    },

    setToAssetsList: (state, action: PayloadAction<string[]>) => {
      state.toAssetsList = action.payload
    },

    setTotal: (state, action: PayloadAction<string>) => {
      state.total = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { actions: converterActions } = converterSlice
export const { reducer: converterReducer } = converterSlice
