import { createSelector } from '@reduxjs/toolkit'
import { getConverter } from 'entities/Converter/model/selectors/getConverter'
import { StateSchema } from 'app/providers/StoreProvider'
import { TransformedCurrencyPair } from '../../types/converter'

type GetCurrencyPairList = (state: StateSchema) => TransformedCurrencyPair[]

export const getCurrencyPairList:GetCurrencyPairList = createSelector(
  [getConverter],
  (converter) => converter.currencyPairList,
)
