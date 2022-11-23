import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { Tabs } from 'shared/ui/Tabs/Tabs'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchCurrencyPairs } from 'entities/ExchangeRate/model/services/fetchCurrencyPairs/fetchCurrencyPairs'

const MainPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCurrencyPairs())
  }, [dispatch])

  return (
    <Box>
      <Tabs />
    </Box>
  )
}

export default MainPage
