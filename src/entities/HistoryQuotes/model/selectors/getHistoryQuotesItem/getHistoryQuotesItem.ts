import { createSelector } from '@reduxjs/toolkit'
import { getHistoryQuotesData } from 'entities/HistoryQuotes/model/selectors/getHistoryQuotesData/getHistoryQuotesData'
import { HistoryId, HistoryTableData } from 'entities/HistoryQuotes/model/types/history'
import { find } from 'lodash'

export const getHistoryQuotesItem = ({ id }: HistoryId) => createSelector(
  [getHistoryQuotesData],
  (historyTableData: HistoryTableData[] | undefined) => {
    const historyTableItem = find(historyTableData, (historyItem) => historyItem.id === id)
    if (historyTableItem) {
      return historyTableItem
    }

    return undefined
  },
)
