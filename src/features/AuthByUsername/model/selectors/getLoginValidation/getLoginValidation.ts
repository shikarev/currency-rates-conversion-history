import { createSelector } from '@reduxjs/toolkit'
import { getLoginForm } from '../getLoginForm'

export const getLoginValidation = createSelector(
  [getLoginForm],
  (loginForm) => loginForm?.validation,
)
