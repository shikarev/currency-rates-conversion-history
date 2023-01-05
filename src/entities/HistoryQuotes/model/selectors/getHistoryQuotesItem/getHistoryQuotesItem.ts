import { createSelector } from '@reduxjs/toolkit'
import { getHistoryQuotesData } from 'entities/HistoryQuotes/model/selectors/getHistoryQuotesData/getHistoryQuotesData'
import { HistoryId } from 'entities/HistoryQuotes/model/types/history'
import { find } from 'lodash'

export const getHistoryQuotesItem = createSelector(
  [getHistoryQuotesData, (_state, id: HistoryId) => id],
  (historyQuotesData, id) => find(
    historyQuotesData,
    (historyItem) => historyItem.id === id,
  ),
)
