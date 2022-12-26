import { RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { LoginPage } from 'pages/LoginPage'

type AppRouteProps = RouteProps & {
  path: string
}

export enum APP_ROUTES {
  MAIN = 'main',
  LOGIN = 'login',
  NOT_FOUND = 'not_found'
}

export const routes: Record<APP_ROUTES, AppRouteProps> = {
  [APP_ROUTES.MAIN]: {
    path: '/main',
    element: <MainPage />,
  },
  [APP_ROUTES.LOGIN]: {
    path: '/login',
    element: <LoginPage />,
  },
  [APP_ROUTES.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
}
