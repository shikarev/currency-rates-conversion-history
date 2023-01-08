import { createSelector } from '@reduxjs/toolkit'
import { HistoryListId } from '../../types/history'
import { getHistoryQuotesData } from '../getHistoryQuotesData/getHistoryQuotesData'

export const getHistoryListId = createSelector(
  [getHistoryQuotesData],
  (historyQuotesData) => {
    const listId:HistoryListId[] | undefined = historyQuotesData?.map((item) => ({
      id: item.id,
    }))
    return listId
  },
)
