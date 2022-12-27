import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CurrencyPair } from 'entities/ExchangeRate/model/types/exchangeRate'
import _ from 'lodash'
import { ConverterSchema } from '../types/converter'

const initialState: ConverterSchema = {
  currencyPairList: [],
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
    setAmount: (state, action: PayloadAction<string>) => {
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

    setCurrencyPairList: (state, action: PayloadAction<CurrencyPair[]>) => {
      state.currencyPairList = action.payload
    },

    setDefaultAsset: (state) => {
      const assets = _.map(state.currencyPairList, 'asset')

      const [assetFrom, assetTo] = assets[0].split('/')
      const fromAssets = assets.map((item: string) => item.split('/')[0])

      state.assetFrom = assetFrom
      state.assetTo = assetTo

      const fromAssetsList = _.uniq(fromAssets)

      const toAssetsList = assets.filter((item: string) => item.includes(`${assetFrom}/`))
        .map((item: string) => (
          item.split('/')[1]
        ))

      state.fromAssetsList = fromAssetsList
      state.toAssetsList = toAssetsList
    },

    setToAssetsList: (state, action: PayloadAction<string[]>) => {
      state.toAssetsList = action.payload
    },

    setChangeFromAsset: (state, action: PayloadAction<string>) => {
      const filteredAssets = state.currencyPairList.map((item) => (
        item.asset
      )).filter((item) => item.includes(`${action.payload}/`))

      const toAssetsList = filteredAssets.map((item) => (
        item.split('/')[1]
      ))

      const assetTo = filteredAssets[0].split('/')[1]

      state.assetTo = assetTo
      state.assetFrom = action.payload
      state.toAssetsList = toAssetsList
    },

    setTotal: (state, action: PayloadAction<string>) => {
      state.total = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { actions: converterActions } = converterSlice
export const { reducer: converterReducer } = converterSlice
