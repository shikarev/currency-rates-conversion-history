import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import uniq from 'lodash/uniq'
import { fetchCurrencyPairs } from 'entities/ExchangeRate/model/services/fetchCurrencyPairs/fetchCurrencyPairs'
import { ExchangeRate } from 'entities/ExchangeRate'
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

    setChangeFromAsset: (state, action: PayloadAction<string>) => {
      state.assetFrom = action.payload

      const toAssetsList = state.currencyPairList
        .map((item) => (item.asset))
        .filter((item) => item.from.includes(action.payload))

      state.toAssetsList = toAssetsList.map((item) => item.to)
      state.assetTo = toAssetsList[0].to
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

        state.currencyPairList = currencyPairList
        state.assetFrom = state.currencyPairList[0].asset.from
        state.assetTo = state.currencyPairList[0].asset.to
        state.fromAssetsList = uniq(state.currencyPairList.map((item) => item.asset.from))
        state.toAssetsList = [state.currencyPairList[0].asset.to]
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
