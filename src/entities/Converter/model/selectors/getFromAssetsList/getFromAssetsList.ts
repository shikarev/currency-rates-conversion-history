import { createSelector } from '@reduxjs/toolkit'
import { getConverter } from 'entities/Converter/model/selectors/getConverter'
import { StateSchema } from 'app/providers/StoreProvider'

type GetFromAssetsList = (state: StateSchema) => string[]

export const getFromAssetsList: GetFromAssetsList = createSelector(
  [getConverter],
  (converter) => converter.fromAssetsList,
)
