import { createSelector } from '@reduxjs/toolkit'
import { getConverter } from 'entities/Converter/model/selectors/getConverter'

export const getFromAssetsList = createSelector(
  [getConverter],
  (converter) => converter.fromAssetsList,
)
