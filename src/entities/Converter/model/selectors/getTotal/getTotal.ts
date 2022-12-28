import { createSelector } from '@reduxjs/toolkit'
import filter from 'lodash/filter'
import { getAssetFrom } from '../getAssetFrom/getAssetFrom'
import { getAssetTo } from '../getAssetTo/getAssetTo'
import { getAmount } from '../getAmount/getAmount'
import { getCurrencyPairList } from '../getCurrencyPairList/getCurrencyPairList'

export const getTotal = createSelector(
  [getAssetFrom, getAssetTo, getCurrencyPairList, getAmount],
  (assetFrom, assetTo, currencyPairList, amount) => {
    const { quote } = filter(currencyPairList, ['asset', { from: assetFrom, to: assetTo }])[0]

    if (amount) {
      const result = amount * quote
      return result.toFixed(4)
    }

    return ''
  },
)
