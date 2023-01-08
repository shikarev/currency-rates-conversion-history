import { createSelector } from '@reduxjs/toolkit'
import { getHistoryListId } from 'entities/HistoryQuotes/model/selectors/getHistoryListId/getHistoryListId'
import { StateSchema } from 'app/providers/StoreProvider'
import { HistoryId } from '../../types/history'

type GetHistoryQuotesPageData = (state: StateSchema, page: number, rowsPerPage: number) => HistoryId[] | undefined

export const getHistoryQuotesPageData: GetHistoryQuotesPageData = createSelector(
  [
    getHistoryListId,
    (_state, page) => page,
    (_state, _page, rowsPerPage) => rowsPerPage,
  ],
  (historyListId, page, rowsPerPage) => (
    historyListId?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  ),
)
