import { createSelector } from '@reduxjs/toolkit'
import { getConverter } from 'entities/Converter/model/selectors/getConverter'

export const getToAssetsList = createSelector(
  [getConverter],
  (converter) => converter.toAssetsList,
)
