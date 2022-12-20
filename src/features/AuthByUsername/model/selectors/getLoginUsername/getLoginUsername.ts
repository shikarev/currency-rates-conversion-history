import { createSelector } from '@reduxjs/toolkit'
import { getLoginForm } from '../getLoginForm'

export const getLoginUsername = createSelector(
  [getLoginForm],
  (loginForm) => loginForm?.login || '',
)
