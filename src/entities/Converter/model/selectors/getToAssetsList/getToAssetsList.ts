import { createSelector } from '@reduxjs/toolkit'
import { getConverter } from 'entities/Converter/model/selectors/getConverter'
import { StateSchema } from 'app/providers/StoreProvider'

type GetToAssetsList = (state: StateSchema) => string[]

export const getToAssetsList: GetToAssetsList = createSelector(
  [getConverter],
  (converter) => converter.toAssetsList,
)
