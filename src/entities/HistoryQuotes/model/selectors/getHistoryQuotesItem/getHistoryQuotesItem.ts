import { createSelector } from '@reduxjs/toolkit'
import { getHistoryQuotesData } from 'entities/HistoryQuotes/model/selectors/getHistoryQuotesData/getHistoryQuotesData'
import { HistoryId, HistoryQuotesData } from 'entities/HistoryQuotes/model/types/history'
import { find } from 'lodash'

export const getHistoryQuotesItem = ({ id }: HistoryId) => createSelector(
  [getHistoryQuotesData],
  (historyQuotesData: HistoryQuotesData[] | undefined) => find(
    historyQuotesData,
    (historyItem) => historyItem.id === id,
  ),
)
