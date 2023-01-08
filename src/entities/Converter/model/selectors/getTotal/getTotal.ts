import { createSelector } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { find } from 'lodash'
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
    const currencyPair = find(
      currencyPairList,
      ['asset', { from: assetFrom, to: assetTo }],
    )

    if (!currencyPair || amount == null) {
      return undefined
    }

    return currencyPair.quote * amount
  },
)
