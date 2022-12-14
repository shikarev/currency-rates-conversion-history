import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { UserResponse } from 'entities/User'
import { unauthorizedQuery } from 'shared/api/base/base'
import { LoginProps } from 'features/UserAuth'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: unauthorizedQuery,
  endpoints: (builder) => ({
    login: builder.query<UserResponse, LoginProps>({
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
