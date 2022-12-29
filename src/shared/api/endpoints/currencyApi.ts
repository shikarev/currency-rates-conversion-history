import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { authorizedQuery } from 'shared/api/base/base'
import { ExchangeRate } from 'entities/ExchangeRate'

export const currencyApi = createApi({
  reducerPath: 'currencyApi',
  baseQuery: authorizedQuery,
  endpoints: (builder) => ({
    quotes: builder.query<ExchangeRate, void>({
      query: () => ({
        url: '',
        method: 'POST',
        body: {
          action: 'quote',
        },
      }),
    }),
  }),
})
