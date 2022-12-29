import { createSelector } from '@reduxjs/toolkit'
import { getConverter } from '../getConverter'

export const getAssetFrom = createSelector(
  [getConverter],
  (converter) => converter.assetFrom,
)
