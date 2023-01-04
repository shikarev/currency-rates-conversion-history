import { createSelector } from '@reduxjs/toolkit'
import { getHistoryQuotesData } from 'entities/HistoryQuotes/model/selectors/getHistoryQuotesData/getHistoryQuotesData'

interface getHistoryQuotesPageDataProps {
    page: number
    rowsPerPage: number
}

export const getHistoryQuotesPageData = ({ page, rowsPerPage }:getHistoryQuotesPageDataProps) => createSelector(
  [getHistoryQuotesData],
  (historyQuotesData) => historyQuotesData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map(((item) => ({
      id: item.id,
    }))),
)
