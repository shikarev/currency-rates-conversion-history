import { createSelector } from '@reduxjs/toolkit'
import { find } from 'lodash'
import { getExchangeRateData } from 'entities/ExchangeRate/model/selectors/getExchangeRateData/getExchangeRateData'
import { StateSchema } from 'app/providers/StoreProvider'
import { ExchangeRateItem } from 'entities/ExchangeRate/model/types/exchangeRate'

type GetExchangeRateItem = (state: StateSchema, id: string) => ExchangeRateItem | undefined

export const getExchangeRateItem: GetExchangeRateItem = createSelector(
  [getExchangeRateData, (_state, id) => id],
  (historyQuotesData, id) => find(
    historyQuotesData,
    (historyItem) => historyItem.id === id,
  ),
)
