import { createSelector } from '@reduxjs/toolkit'
import { getHistoryQuotesData } from '../getHistoryQuotesData/getHistoryQuotesData'

export const getHistoryListId = createSelector(
  [getHistoryQuotesData],
  (historyQuotesData) => historyQuotesData?.map((item) => ({
    id: item.id,
  })),
)
