import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import uniq from 'lodash/uniq'
import { fetchCurrencyPairs } from 'entities/ExchangeRate/model/services/fetchCurrencyPairs/fetchCurrencyPairs'
import { ExchangeRate } from 'entities/ExchangeRate'
import map from 'lodash/map'
import filter from 'lodash/filter'
import { ConverterSchema } from '../types/converter'

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

    setTotal: (state, action: PayloadAction<string>) => {
      state.total = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencyPairs.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchCurrencyPairs.fulfilled, (state, action: PayloadAction<ExchangeRate>) => {
        const currencyPairList = [...action.payload.assets.map((item) => (
          {
            asset: { from: item.asset.split('/')[0], to: item.asset.split('/')[1] },
            quote: Number(item.quote),
          }
        ))]

        const { from, to } = currencyPairList[0].asset

        state.currencyPairList = currencyPairList
        state.assetFrom = from
        state.assetTo = to
        state.fromAssetsList = uniq(map(currencyPairList, 'asset.from'))
        state.toAssetsList = [to]
        state.isLoading = false
      })
      .addCase(fetchCurrencyPairs.rejected, (state) => {
        state.isLoading = false
      })
  },
})

// Action creators are generated for each case reducer function
export const { actions: converterActions } = converterSlice
export const { reducer: converterReducer } = converterSlice
