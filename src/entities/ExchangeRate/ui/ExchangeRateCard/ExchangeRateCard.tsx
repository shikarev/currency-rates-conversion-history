import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Box, IconButton } from '@mui/material'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { exchangeRateActions, exchangeRateReducer } from 'entities/ExchangeRate'
import { getExchangeRateData } from 'entities/ExchangeRate/model/selectors/getExchangeRateData/getExchangeRateData'
import { useSelector } from 'react-redux'
import { TableDataGrid } from 'shared/ui/TableDataGrid/TableDataGrid'
import { GridColDef } from '@mui/x-data-grid'
import StarOutlined from 'shared/assets/icons/star-outlined.svg'
import StarFilled from 'shared/assets/icons/star-filled.svg'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import cls from './ExchangeRateCard.module.scss'

const reducers: ReducersList = {
  exchangeRate: exchangeRateReducer,
}

interface ExchangeRateCardProps {
  className?: string
}

const ExchangeRateCard = memo((props: ExchangeRateCardProps) => {
  const dispatch = useAppDispatch()

  const removeFavorite = (id: string) => {
    dispatch(exchangeRateActions.removeFromFavorites(id))
  }

  const addFavorite = (id: string) => {
    dispatch(exchangeRateActions.addToFavorites(id))
  }

  const columns: GridColDef[] = [
    {
      field: 'action',
      headerName: '',
      flex: 0.15,
      sortable: false,
      renderCell: (params) => (
        <IconButton
          onClick={() => (
            params.row.favorite
              ? removeFavorite(params.row.id)
              : addFavorite(params.row.id)
          )}
        >
          {params.row.favorite ? <StarFilled /> : <StarOutlined />}
        </IconButton>
      ),
    },
    {
      field: 'asset',
      headerName: 'Валютная пара',
      minWidth: 120,
      flex: 0.3,
      sortable: false,
    },
    {
      field: 'quote',
      headerName: 'Котировка',
      flex: 0.3,
      minWidth: 120,
      sortable: false,
    },
    {
      field: 'startDate',
      headerName: 'Дата получения',
      minWidth: 120,
      flex: 0.3,
      sortable: false,
    },
  ]

  const { className } = props

  const data = useSelector(getExchangeRateData)

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Box className={classNames(cls.ExchangeRateCard, {}, [className])}>
        <TableDataGrid data={data || []} columns={columns} hideFooterPagination />
      </Box>
    </DynamicModuleLoader>
  )
})

export { ExchangeRateCard }
