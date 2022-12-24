import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { Response } from 'entities/User'
import { unauthorizedQuery } from 'shared/api/api'
import { loginProps } from '../model/types/loginSchema'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: unauthorizedQuery,
  endpoints: (builder) => ({
    login: builder.mutation<Response, loginProps>({
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

export const { useLoginMutation } = authApi
