import { createSelector } from '@reduxjs/toolkit'
import { HistoryId } from 'entities/HistoryQuotes/model/types/history'
import { find } from 'lodash'
import { getExchangeRateData } from 'entities/ExchangeRate/model/selectors/getExchangeRateData/getExchangeRateData'

export const getExchangeRateItem = createSelector(
  [getExchangeRateData, (_state, id: HistoryId) => id],
  (historyQuotesData, id) => find(
    historyQuotesData,
    (historyItem) => historyItem.id === id,
  ),
)
