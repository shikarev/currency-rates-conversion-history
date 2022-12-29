import { createSelector } from '@reduxjs/toolkit'
import { getHistoryQuotesData } from 'entities/HistoryQuotes/model/selectors/getHistoryQuotesData/getHistoryQuotesData'

export const getHistoryQuotesItem = (historyId: string) => createSelector(
  [getHistoryQuotesData],
  (state) => {
    const item = state?.filter((item) => item.id === historyId)
    if (item) {
      return item[0]
    }

    return undefined
  },
)
