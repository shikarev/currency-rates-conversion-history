import { createSelector } from '@reduxjs/toolkit'
import { getHistoryQuotes } from 'entities/HistoryQuotes/model/selectors/getHistoryQuotes'

export const getHistoryQuotesData = createSelector(
  [getHistoryQuotes],
  (historyQuotes) => historyQuotes?.data,
)
