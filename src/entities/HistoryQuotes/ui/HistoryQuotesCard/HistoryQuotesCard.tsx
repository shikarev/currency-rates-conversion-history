import React, {
  memo, useCallback, useEffect, useState,
} from 'react'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { historyQuotesReducer } from 'entities/HistoryQuotes'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchHistoryQuotes } from 'entities/HistoryQuotes/model/services/fetchHistoryQuotes/fetchHistoryQuotes'
import { getHistoryListId } from 'entities/HistoryQuotes/model/selectors/getHistoryListId/getHistoryListId'
import { Table, TableBody, TableRow } from '@mui/material'
import Arrow from 'shared/assets/icons/big-arrow.svg'
import {
  HistoryQuotesCardStyled, IconButtonArrowLeftStyled,
  IconButtonArrowRightStyled,
  PageCountWrapperStyled,
  PaginationWrapper,
  TableCellStyled,
  TableContainerStyled,
  TableHeadStyled,
} from './HistoryQuotesCard.styled'
import { HistoryQuotesRow } from '../HistoryQuotesRow/HistoryQuotesRow'

const reducers: ReducersList = {
  historyQuotes: historyQuotesReducer,
}

const HistoryQuotesCard: React.FC = memo(() => {
  const dispatch = useAppDispatch()
  const listId = useSelector(getHistoryListId)

  const rowsPerPage = 10
  const totalPages = listId && (listId.length / rowsPerPage)

  const [page, setPage] = useState<number>(0)

  const handlePrevPage = useCallback(() => {
    setPage(page - 1)
  }, [page])

  const handleNextPage = useCallback(() => {
    setPage(page + 1)
  }, [page])

  useEffect(() => {
    dispatch(fetchHistoryQuotes())
    console.log('history')
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HistoryQuotesCardStyled>
        <TableContainerStyled>
          <Table sx={{ minWidth: 650 }}>
            <TableHeadStyled>
              <TableRow>
                <TableCellStyled align="left" width="85px">Актив</TableCellStyled>
                <TableCellStyled align="left" width="120px">Начало</TableCellStyled>
                <TableCellStyled align="left" width="110px">Котировка</TableCellStyled>
                <TableCellStyled align="left" width="120px">Конец</TableCellStyled>
                <TableCellStyled align="left" width="110px">Котировка</TableCellStyled>
                <TableCellStyled align="left" width="85px">Прибыль</TableCellStyled>
              </TableRow>
            </TableHeadStyled>
            <TableBody sx={{ height: '460px' }}>
              {listId?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <HistoryQuotesRow key={row.id} id={row.id} />
              ))}
            </TableBody>
          </Table>
          {!totalPages ? null
            : (
              <PaginationWrapper>
                <IconButtonArrowLeftStyled
                  disableRipple
                  onClick={handlePrevPage}
                  disabled={page === 0}
                >
                  <Arrow />
                </IconButtonArrowLeftStyled>
                <PageCountWrapperStyled>
                  {`${page + 1} / ${totalPages}`}
                </PageCountWrapperStyled>
                <IconButtonArrowRightStyled
                  disableRipple
                  onClick={handleNextPage}
                  disabled={page === totalPages - 1}
                >
                  <Arrow />
                </IconButtonArrowRightStyled>
              </PaginationWrapper>
            )}
        </TableContainerStyled>
      </HistoryQuotesCardStyled>

    </DynamicModuleLoader>
  )
})

export { HistoryQuotesCard }
