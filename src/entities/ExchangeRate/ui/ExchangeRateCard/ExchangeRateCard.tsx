import React, { memo, useEffect, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Box } from '@mui/material'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { exchangeRateReducer } from 'entities/ExchangeRate'
import { getExchangeRateData } from 'entities/ExchangeRate/model/selectors/getExchangeRateData/getExchangeRateData'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { ColumnProps } from 'shared/ui/CustomTable/types/types'
import { CustomTable } from 'shared/ui/CustomTable/CustomTable'
import { fetchExchangeRateItems } from 'entities/ExchangeRate/model/services/fetchCurrencyPairs/fetchCurrencyPairs'
import cls from './ExchangeRateCard.module.scss'
import { ExchangeRateRow } from '../ExchangeRateRow/ExchangeRateRow'

const reducers: ReducersList = {
  exchangeRate: exchangeRateReducer,
}

interface ExchangeRateCardProps {
  className?: string
}

const ExchangeRateCard = memo((props: ExchangeRateCardProps) => {
  const dispatch = useAppDispatch()

  const [page, setPage] = useState<number>(0)
  const rowsPerPage = 10

  const data = useSelector(getExchangeRateData)

  const columns: ColumnProps[] = [
    {
      field: 'action',
      headerName: '',
      align: 'left',
      maxWidth: '85px',
    },
    {
      field: 'asset',
      headerName: 'Валютная пара',
      align: 'left',
      width: '120px',
    },
    {
      field: 'quote',
      headerName: 'Котировка',
      align: 'left',
      width: '110px',
    },
    {
      field: 'startDate',
      headerName: 'Дата получения',
      align: 'left',
      width: '120px',
    },
  ]

  const { className } = props

  useEffect(() => {
    dispatch(fetchExchangeRateItems())
    console.log('exchange')
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Box className={classNames(cls.ExchangeRateCard, {}, [className])}>
        <CustomTable
          columns={columns}
          dataLength={data?.length}
          page={page}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
        >
          {data?.map((row) => (
            <ExchangeRateRow key={row.id} id={row.id} />
          ))}
        </CustomTable>
      </Box>
    </DynamicModuleLoader>
  )
})

export { ExchangeRateCard }
