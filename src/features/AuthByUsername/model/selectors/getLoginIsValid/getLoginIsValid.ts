import { createSelector } from '@reduxjs/toolkit'
import { getLogin } from '../getLogin'

export const getLoginIsValid = createSelector(
  [getLogin],
  (login) => login?.isValid,
)
