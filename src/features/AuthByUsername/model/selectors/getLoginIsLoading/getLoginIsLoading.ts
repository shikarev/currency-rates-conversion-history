import { createSelector } from '@reduxjs/toolkit'
import { getLoginForm } from '../getLoginForm'

export const getLoginIsLoading = createSelector(
  [getLoginForm],
  (loginForm) => loginForm?.isLoading || false,
)
