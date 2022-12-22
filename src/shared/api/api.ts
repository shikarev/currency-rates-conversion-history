import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

export const unauthorizedApi = createApi({
  reducerPath: 'unauthorizedApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://test-front-spa.mmtestprojectsfactory.com/api/',
    prepareHeaders: (headers) => headers,
  }),
  endpoints: (builder) => ({}),
})

export const authorizedApi = createApi({
  reducerPath: 'authorizedApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://test-front-spa.mmtestprojectsfactory.com/api/',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''
      if (token) {
        headers.set('Authorization', token)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({}),
})
