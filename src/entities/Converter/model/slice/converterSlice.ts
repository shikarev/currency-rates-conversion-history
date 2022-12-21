import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Table } from 'entities/ExchangeRate/model/types/exchangeRate'
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

    setFirst: (state, action: PayloadAction<string>) => {
      state.assetFrom = action.payload
    },

    setAssetTo: (state, action: PayloadAction<string>) => {
      state.assetTo = action.payload
    },

    setDefaultAssets: (state, action: PayloadAction<Table[]>) => {
      const assets = action.payload.map((item) => item.asset)

      const [fromAsset, toAsset] = assets[0].split('/')
      const fromAssets = assets.map((item) => item.split('/')[0])

      state.assetFrom = fromAsset
      state.assetTo = toAsset
      state.fromAssetsList = fromAssets.filter((element, index) => fromAssets.indexOf(element) === index)
      state.toAssetsList = assets.filter((item) => item.includes(`${fromAsset}/`)).map((item) => (
        item.split('/')[1]
      ))
    },

    setSecondItems: (state, action: PayloadAction<string[]>) => {
      const secondPair = action.payload.map((item) => (
        item.split('/')[1]
      ))
      state.toAssetsList = secondPair
    },

    setTotal: (state, action: PayloadAction<string>) => {
      state.total = action.payload
    },

    getAsset: (state, action: PayloadAction<string[]>) => {
      const secondPair = action.payload.map((item) => (
        item.split('/')[1]
      ))

      const secondItem = action.payload[0].split('/')[1]

      state.assetTo = secondItem
      state.toAssetsList = secondPair
    },
  },
})

// Action creators are generated for each case reducer function
export const { actions: converterActions } = converterSlice
export const { reducer: converterReducer } = converterSlice
