import { createSelector } from '@reduxjs/toolkit'
import { getConverter } from 'entities/Converter/model/selectors/getConverter'

export const getAssetTo = createSelector(
  [getConverter],
  (converter) => converter.assetTo,
)
