import { createSelector } from '@reduxjs/toolkit'
import { getLoginForm } from '../getLoginForm'

export const getLoginPassword = createSelector(
  [getLoginForm],
  (loginForm) => loginForm?.password || '',
)
