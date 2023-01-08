import { createSelector } from '@reduxjs/toolkit'
import filter from 'lodash/filter'
import first from 'lodash/first'
import { StateSchema } from 'app/providers/StoreProvider'
import { getAssetFrom } from '../getAssetFrom/getAssetFrom'
import { getAssetTo } from '../getAssetTo/getAssetTo'
import { getAmount } from '../getAmount/getAmount'
import { getCurrencyPairList } from '../getCurrencyPairList/getCurrencyPairList'

type GetTotal = (
    state: StateSchema,
) => number | undefined

export const getTotal: GetTotal = createSelector(
  [getAssetFrom, getAssetTo, getCurrencyPairList, getAmount],
  (assetFrom, assetTo, currencyPairList, amount) => {
    const currencyPair = first(filter(
      currencyPairList,
      ['asset', { from: assetFrom, to: assetTo }],
    ))

    if (!currencyPair || amount == null) {
      return undefined
    }

    return currencyPair.quote * amount
  },
)
