import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import uniq from 'lodash/uniq'
import map from 'lodash/map'
import filter from 'lodash/filter'
import {
  fetchConverterCurrencyPairs,
} from 'entities/Converter/model/services/fetchConverterCurrencyPairs/fetchConverterCurrencyPairs'
import { ConverterSchema, TransformedCurrencyPair } from '../types/converter'

const initialState: ConverterSchema = {
  currencyPairList: [],
  assetFrom: '',
  fromAssetsList: [],
  assetTo: '',
  toAssetsList: [],
  isLoading: false,
}

export const converterSlice = createSlice({
  name: 'converter',
  initialState,
  reducers: {
    setAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload
    },

    setAssetTo: (state, action: PayloadAction<string>) => {
      state.assetTo = action.payload
    },

    setChangeFromAsset: (state, action: PayloadAction<string>) => {
      state.assetFrom = action.payload

      const toAssetsList = filter(state.currencyPairList, ['asset', { from: action.payload }])
        .map((item) => item.asset.to)

      const assetTo = toAssetsList[0]

      state.toAssetsList = toAssetsList
      state.assetTo = assetTo
    },

    setTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchConverterCurrencyPairs.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchConverterCurrencyPairs.fulfilled, (state, action: PayloadAction<TransformedCurrencyPair[]>) => {
        const { from, to } = action.payload[0].asset

        state.currencyPairList = action.payload
        state.assetFrom = from
        state.assetTo = to
        state.fromAssetsList = uniq(map(action.payload, 'asset.from'))
        state.toAssetsList = [to]
        state.isLoading = false
      })
      .addCase(fetchConverterCurrencyPairs.rejected, (state) => {
        state.isLoading = false
      })
  },
})

// Action creators are generated for each case reducer function
export const { actions: converterActions } = converterSlice
export const { reducer: converterReducer } = converterSlice
