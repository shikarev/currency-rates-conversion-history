import { createSelector } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getConverter } from '../getConverter'

type GetAssetFrom = (state: StateSchema) => string

export const getAssetFrom: GetAssetFrom = createSelector(
  [getConverter],
  (converter) => converter.assetFrom,
)
