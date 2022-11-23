import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Box, IconButton, Tooltip } from '@mui/material'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { exchangeRateReducer } from 'entities/ExchangeRate'
import { getExchangeRateData } from 'entities/ExchangeRate/model/selectors/getExchangeRateData/getExchangeRateData'
import { useSelector } from 'react-redux'
import { TableDataGrid } from 'shared/ui/TableDataGrid/TableDataGrid'
import { GridColDef } from '@mui/x-data-grid'
import StarOutlined from 'shared/assets/icons/star-outlined.svg'
import StarFilled from 'shared/assets/icons/star-filled.svg'
import cls from './ExchangeRateCard.module.scss'

const reducers: ReducersList = {
  exchangeRate: exchangeRateReducer,
}

interface ExchangeRateCardProps {
  className?: string
}

const columns: GridColDef[] = [
  {
    field: 'action',
    headerName: '',
    flex: 0.15,
    renderCell: (params) => (
      <Tooltip title="Добавить в избранное" placement="top-start">
        <span>
          <IconButton onClick={() => console.log(params.row.id)}>
            <StarOutlined />
          </IconButton>
        </span>
      </Tooltip>
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

const ExchangeRateCard = memo((props: ExchangeRateCardProps) => {
  const { className } = props

  const data = useSelector(getExchangeRateData)

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Box className={classNames(cls.ExchangeRateCard, {}, [className])}>
        <TableDataGrid data={data?.assets || []} columns={columns} />
      </Box>
    </DynamicModuleLoader>
  )
})

export { ExchangeRateCard }
