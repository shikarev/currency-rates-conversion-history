import { createSelector } from '@reduxjs/toolkit'
import { getLogin } from '../getLogin'

export const getLoginUsername = createSelector(
  [getLogin],
  (login) => login?.login,
)
