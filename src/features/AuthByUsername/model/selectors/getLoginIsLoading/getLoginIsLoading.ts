import { createSelector } from '@reduxjs/toolkit'
import { getLogin } from '../getLogin'

export const getLoginIsLoading = createSelector(
  [getLogin],
  (login) => login?.isLoading,
)
