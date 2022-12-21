import { createSelector } from '@reduxjs/toolkit'
import { getConverter } from 'entities/Converter/model/selectors/getConverter'

export const getAmount = createSelector(
  [getConverter],
  (converter) => converter.amount,
)
