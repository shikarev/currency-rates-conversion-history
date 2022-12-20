import { rtkApi } from 'shared/api/rtkApi'
import { Response } from 'entities/User'

interface loginByResponseProps {
    login: string,
    password: string
}

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<Notification[], null>({
      query: () => ({
        url: '/notifications',
      }),
    }),
    loginByResponse: build.mutation<Response, loginByResponseProps>({
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

export const useLoginByResponse = notificationApi.useLoginByResponseMutation
