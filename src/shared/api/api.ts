import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

export const authorizedQuery = fetchBaseQuery({
  baseUrl: 'https://test-front-spa.mmtestprojectsfactory.com/api/',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''
    if (token) {
      headers.set('Authorization', token)
    }
    return headers
  },
})

export const unauthorizedQuery = fetchBaseQuery({
  baseUrl: 'https://test-front-spa.mmtestprojectsfactory.com/api/',
  prepareHeaders: (headers) => headers,
})
