import { createSelector } from '@reduxjs/toolkit'
import { HistoryId } from '../../types/history'
import { getHistoryQuotesData } from '../getHistoryQuotesData/getHistoryQuotesData'

export const getHistoryListId = createSelector(
  [getHistoryQuotesData],
  (historyQuoteData): HistoryId[] | undefined => {
    const historyListId = historyQuoteData?.map((item) => item.id)

    return historyListId
  },
)
