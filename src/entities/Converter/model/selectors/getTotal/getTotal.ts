import { createSelector } from '@reduxjs/toolkit'
import { getAssetFrom } from 'entities/Converter/model/selectors/getAssetFrom/getAssetFrom'
import { getAssetTo } from 'entities/Converter/model/selectors/getAssetTo/getAssetTo'
import { getCurrencyPairList } from 'entities/ExchangeRate/model/selectors/getCurrencyPairList/getCurrencyPairList'
import { getAmount } from 'entities/Converter/model/selectors/getAmount/getAmount'

export const getTotal = createSelector(
  [getAssetFrom, getAssetTo, getCurrencyPairList, getAmount],
  (assetFrom, assetTo, currencyPairList, amount) => {
    const result = `${assetFrom}/${assetTo}`
    const quotes = currencyPairList?.find((x) => x.asset === result)?.quote

    const finish = Number(amount) * Number(quotes)

    if (amount.length > 0) {
      return String(finish.toFixed(4))
    }

    return ''
  },
)
