import { createSelector } from '@reduxjs/toolkit'
import { getLogin } from '../getLogin'

export const getLoginValidation = createSelector(
  [getLogin],
  (login) => login?.isValid,
)
