import { createSelector } from '@reduxjs/toolkit'
import { getAssetFrom } from 'entities/Converter/model/selectors/getAssetFrom/getAssetFrom'
import { getAssetTo } from 'entities/Converter/model/selectors/getAssetTo/getAssetTo'
import { getCurrencyPairList } from 'entities/ExchangeRate/model/selectors/getCurrencyPairList/getCurrencyPairList'
import { getAmount } from 'entities/Converter/model/selectors/getAmount/getAmount'

export const getTotal = createSelector(
  [getAssetFrom, getAssetTo, getCurrencyPairList, getAmount],
  (assetFrom, assetTo, currencyPairList, amount) => {
    const asset = `${assetFrom}/${assetTo}`
    const quote = currencyPairList?.find((currencyPair) => currencyPair.asset === asset)?.quote

    const result = Number(amount) * Number(quote)

    if (amount.length > 0) {
      return String(result.toFixed(4))
    }

    return ''
  },
)
