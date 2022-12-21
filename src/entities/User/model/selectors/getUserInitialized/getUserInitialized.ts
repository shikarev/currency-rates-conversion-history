import { createSelector } from '@reduxjs/toolkit'
import { getUser } from 'entities/User/model/selectors/getUser'

export const getUserInitialized = createSelector(
  [getUser],
  (user) => user.initialized,
)
