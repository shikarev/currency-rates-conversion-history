import React, { memo, useEffect, useState } from 'react'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { historyQuotesReducer } from 'entities/HistoryQuotes'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchHistoryQuotes } from 'entities/HistoryQuotes/model/services/fetchHistoryQuotes/fetchHistoryQuotes'
import { getHistoryListId } from 'entities/HistoryQuotes/model/selectors/getHistoryListId/getHistoryListId'
import { ColumnProps } from 'shared/ui/CustomTable/types/types'
import { CustomTable } from 'shared/ui/CustomTable/CustomTable'
import {
  getHistoryQuotesPageData,
} from 'entities/HistoryQuotes/model/selectors/getHistoryQuotesPageData/getHistoryQuotesPageData'
import { HistoryQuotesRow } from '../HistoryQuotesRow/HistoryQuotesRow'

const reducers: ReducersList = {
  historyQuotes: historyQuotesReducer,
}

const HistoryQuotesCard: React.FC = memo(() => {
  const columns: ColumnProps[] = [
    {
      field: 'asset',
      headerName: 'Актив',
      align: 'left',
      width: '85px',
    },
    {
      field: 'startDate',
      headerName: 'Начало',
      align: 'left',
      width: '120px',
    },
    {
      field: 'startQuote',
      headerName: 'Котировка',
      align: 'left',
      width: '110px',
    },
    {
      field: 'finishDate',
      headerName: 'Конец',
      align: 'left',
      width: '120px',
    },
    {
      field: 'finishQuote',
      headerName: 'Котировка',
      align: 'left',
      width: '110px',
    },
    {
      field: 'profit',
      headerName: 'Прибыль',
      align: 'left',
      width: '85px',
    },
  ]

  const dispatch = useAppDispatch()

  const [page, setPage] = useState<number>(0)
  const rowsPerPage = 10

  const listId = useSelector(getHistoryListId)
  const currentPageData = useSelector((state) => (
    getHistoryQuotesPageData(state, page, rowsPerPage)
  ))

  useEffect(() => {
    dispatch(fetchHistoryQuotes())
    console.log('history')
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <CustomTable
        columns={columns}
        dataLength={listId?.length}
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
      >
        {currentPageData?.map((row) => (
          <HistoryQuotesRow key={row.id} id={row.id} />
        ))}
      </CustomTable>
    </DynamicModuleLoader>
  )
})

export { HistoryQuotesCard }
