import { createSelector } from '@reduxjs/toolkit'
import { getHistoryListId } from 'entities/HistoryQuotes/model/selectors/getHistoryListId/getHistoryListId'

export const getHistoryQuotesPageData = createSelector(
  [
    getHistoryListId,
    (_state, page) => page,
    (_state, _page, rowsPerPage) => rowsPerPage,
  ],
  (historyListId, page, rowsPerPage) => (
    historyListId?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  ),
)
