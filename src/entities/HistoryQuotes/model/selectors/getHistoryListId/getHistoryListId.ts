import { createSelector } from '@reduxjs/toolkit'
import { getHistoryQuotes } from 'entities/HistoryQuotes/model/selectors/getHistoryQuotes'

export const getHistoryListId = createSelector(
  [getHistoryQuotes],
  (historyQuotes) => historyQuotes?.data?.map(((item) => ({
    id: item.id,
  }))),
)
