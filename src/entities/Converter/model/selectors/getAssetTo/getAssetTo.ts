import { createSelector } from '@reduxjs/toolkit'
import { getConverter } from 'entities/Converter/model/selectors/getConverter'
import { StateSchema } from 'app/providers/StoreProvider'

type GetAssetTo = (state: StateSchema) => string

export const getAssetTo: GetAssetTo = createSelector(
  [getConverter],
  (converter) => converter.assetTo,
)
