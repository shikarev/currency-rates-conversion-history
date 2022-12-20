import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from 'axios'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

export const $api = axios.create({
  baseURL: 'https://test-front-spa.mmtestprojectsfactory.com/api/',
})

export const rtkApi = createApi({
  reducerPath: 'api',
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
