import { createSelector } from '@reduxjs/toolkit'
import { getHistoryQuotes } from 'entities/HistoryQuotes/model/selectors/getHistoryQuotes'
import { StateSchema } from 'app/providers/StoreProvider'
import { HistoryQuotesData } from 'entities/HistoryQuotes/model/types/history'

type GetHistoryQuotesData = (state: StateSchema) => HistoryQuotesData[] | undefined

export const getHistoryQuotesData: GetHistoryQuotesData = createSelector(
  [getHistoryQuotes],
  (historyQuotes) => historyQuotes?.data,
)
