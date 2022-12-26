import { createSelector } from '@reduxjs/toolkit'
import { getLogin } from '../getLogin'

export const getLoginPassword = createSelector(
  [getLogin],
  (login) => login?.password,
)
