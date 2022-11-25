import { classNames } from 'shared/lib/classNames/classNames'
import { TableDataGrid } from 'shared/ui/TableDataGrid/TableDataGrid'
import { memo, useEffect } from 'react'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { historyQuotesReducer } from 'entities/HistoryQuotes'
import { useSelector } from 'react-redux'
import { getHistoryQuotesData } from 'entities/HistoryQuotes/model/selectors/getHistoryQuotesData/getHistoryQuotesData'
import { GridColDef } from '@mui/x-data-grid'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchHistoryQuotes } from 'entities/HistoryQuotes/model/services/fetchHistoryQuotes/fetchHistoryQuotes'
import cls from './HistoryQuotesCard.module.scss'

const reducers: ReducersList = {
  historyQuotes: historyQuotesReducer,
}

interface HistoryCardProps {
  className?: string
}

const HistoryQuotesCard = memo((props: HistoryCardProps) => {
  const { className } = props

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

  useEffect(() => {
    if (!data) {
      dispatch(fetchHistoryQuotes())
    }
  }, [dispatch, data])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.HistoryCard, {}, [className])}>
        <TableDataGrid data={data || []} columns={columns} />
      </div>
    </DynamicModuleLoader>
  )
})

export { HistoryQuotesCard }
