import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CurrencyPair } from 'entities/ExchangeRate/model/types/exchangeRate'
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

    setDefaultAsset: (state, action: PayloadAction<CurrencyPair[]>) => {
      const assets = action.payload.map((item) => item.asset)

      const [assetFrom, assetTo] = assets[0].split('/')
      const fromAssets = assets.map((item) => item.split('/')[0])

      state.assetFrom = assetFrom
      state.assetTo = assetTo

      const fromAssetsList = fromAssets.filter((element, index) => fromAssets.indexOf(element) === index)
      const toAssetsList = assets.filter((item) => item.includes(`${assetFrom}/`)).map((item) => (
        item.split('/')[1]
      ))

      state.fromAssetsList = fromAssetsList
      state.toAssetsList = toAssetsList
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
