import { Response } from 'entities/User'
import { unauthorizedApi } from 'shared/api/api'

interface loginProps {
    login: string,
    password: string
}

const authApi = unauthorizedApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<Response, loginProps>({
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

export const useLogin = authApi.useLoginMutation
