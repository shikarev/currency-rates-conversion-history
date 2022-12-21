import { rtkApi } from 'shared/api/rtkApi'
import { Response } from 'entities/User'

interface loginProps {
    login: string,
    password: string
}

const authApi = rtkApi.injectEndpoints({
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
