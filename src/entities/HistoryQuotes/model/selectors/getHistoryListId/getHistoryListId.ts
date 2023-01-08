import { createSelector } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { HistoryId } from '../../types/history'
import { getHistoryQuotesData } from '../getHistoryQuotesData/getHistoryQuotesData'

type GetHistoryListId = (state: StateSchema) => HistoryId[] | undefined

export const getHistoryListId: GetHistoryListId = createSelector(
  [getHistoryQuotesData],
  (historyQuoteData) => {
    const historyListId = historyQuoteData?.map((item) => item.id)

    return historyListId
  },
)
