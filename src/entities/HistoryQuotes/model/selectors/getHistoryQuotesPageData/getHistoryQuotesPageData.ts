import { createSelector } from '@reduxjs/toolkit'
import { getHistoryQuotesData } from 'entities/HistoryQuotes/model/selectors/getHistoryQuotesData/getHistoryQuotesData'

export const getHistoryQuotesPageData = createSelector(
  [
    getHistoryQuotesData,
    (_state, page) => page,
    (_state, _page, rowsPerPage) => rowsPerPage,
  ],
  (historyQuotesData, page, rowsPerPage) => (
    historyQuotesData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((item) => ({
        id: item.id,
      }))
  ),
)
