import { createSelector } from '@reduxjs/toolkit'
import { getHistoryQuotesData } from 'entities/HistoryQuotes/model/selectors/getHistoryQuotesData/getHistoryQuotesData'
import { HistoryQuotesData } from 'entities/HistoryQuotes/model/types/history'
import { find } from 'lodash'
import { StateSchema } from 'app/providers/StoreProvider'

type GetHistoryQuotesItem = (state: StateSchema, id: string) => HistoryQuotesData | undefined

export const getHistoryQuotesItem: GetHistoryQuotesItem = createSelector(
  [getHistoryQuotesData, (_state, id: string) => id],
  (historyQuotesData, id) => find(
    historyQuotesData,
    (historyItem) => historyItem.id === id,
  ),
)
