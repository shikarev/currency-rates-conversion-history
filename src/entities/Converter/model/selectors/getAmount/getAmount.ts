import { createSelector } from '@reduxjs/toolkit'
import { getConverter } from 'entities/Converter/model/selectors/getConverter'
import { StateSchema } from 'app/providers/StoreProvider'

type GetAmount = (state: StateSchema) => number | undefined

export const getAmount: GetAmount = createSelector(
  [getConverter],
  (converter) => converter.amount,
)
