import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { UserResponse } from 'entities/User'
import { unauthorizedQuery } from 'shared/api/api'
import { loginProps } from '../model/types/loginSchema'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: unauthorizedQuery,
  endpoints: (builder) => ({
    login: builder.query<UserResponse, loginProps>({
      query: ({ login, password }) => ({
        url: '',
        method: 'POST',
        body: {
          action: 'login',
          login,
          password,
        },
      }),
    }),
  }),
})
