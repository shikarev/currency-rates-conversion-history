import { TableDataGrid } from 'shared/ui/TableDataGrid/TableDataGrid'
import React, { memo, useEffect } from 'react'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { historyQuotesReducer } from 'entities/HistoryQuotes'
import { useSelector } from 'react-redux'
import { getHistoryQuotesData } from 'entities/HistoryQuotes/model/selectors/getHistoryQuotesData/getHistoryQuotesData'
import { GridColDef } from '@mui/x-data-grid'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchHistoryQuotes } from 'entities/HistoryQuotes/model/services/fetchHistoryQuotes/fetchHistoryQuotes'
import {
  HistoryQuotesCardStyled, TableCellStyled,
  TableContainerStyled, TableHeadStyled,
} from 'entities/HistoryQuotes/ui/HistoryQuotesCard/HistoryQuotesCard.styled'
import { getHistoryListId } from 'entities/HistoryQuotes/model/selectors/getHistoryListId/getHistoryListId'
import { getHistoryQuotesItem } from 'entities/HistoryQuotes/model/selectors/getHistoryQuotesItem/getHistoryQuotesItem'
import {
  Pagination,
  Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow,
} from '@mui/material'
import HistoryQuotesRow from 'entities/HistoryQuotes/ui/HistoryQuotesRow/HistoryQuotesRow'

const reducers: ReducersList = {
  historyQuotes: historyQuotesReducer,
}

const HistoryQuotesCard: React.FC = memo(() => {
  const columns: GridColDef[] = [
    {
      field: 'asset',
      headerName: 'Актив',
      minWidth: 85,
      flex: 0.2,
      sortable: false,
    },
    {
      field: 'startDate',
      headerName: 'Начало',
      minWidth: 120,
      flex: 0.3,
      sortable: false,
    },
    {
      field: 'startQuote',
      headerName: 'Котировка',
      minWidth: 110,
      flex: 0.25,
      sortable: false,
    },
    {
      field: 'finishDate',
      headerName: 'Конец',
      minWidth: 120,
      flex: 0.3,
      sortable: false,
    },
    {
      field: 'finishQuote',
      headerName: 'Котировка',
      flex: 0.25,
      minWidth: 110,
      sortable: false,
    },
    {
      field: 'profit',
      headerName: 'Прибыль',
      flex: 0.2,
      minWidth: 85,
      sortable: false,
    },
  ]

  const dispatch = useAppDispatch()
  const data = useSelector(getHistoryQuotesData)
  const idList = useSelector(getHistoryListId)

  const [page, setPage] = React.useState(0)
  const rowsPerPage = 10

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  const rows = data

  useEffect(() => {
    if (!data) {
      dispatch(fetchHistoryQuotes())
      console.log('history')
    }
  }, [dispatch, data])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HistoryQuotesCardStyled>
        <TableContainerStyled>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHeadStyled>
              <TableRow>
                <TableCellStyled>Актив</TableCellStyled>
                <TableCellStyled align="right">Начало</TableCellStyled>
                <TableCellStyled align="right">Котировка</TableCellStyled>
                <TableCellStyled align="right">Конец</TableCellStyled>
                <TableCellStyled align="right">Котировка</TableCellStyled>
                <TableCellStyled align="right">Прибыль</TableCellStyled>
              </TableRow>
            </TableHeadStyled>
            <TableBody>
              {rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <HistoryQuotesRow key={row.id} id={row.id} />
              ))}
            </TableBody>
            <TableFooter>
              <Pagination count={10} page={page} onChange={handleChange} />
            </TableFooter>
          </Table>
        </TableContainerStyled>
      </HistoryQuotesCardStyled>

    </DynamicModuleLoader>
  )
})

export { HistoryQuotesCard }
