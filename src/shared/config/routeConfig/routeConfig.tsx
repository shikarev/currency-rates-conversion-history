import { RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { LoginPage } from 'pages/LoginPage'

type AppRouteProps = RouteProps & {
  path: string
}

export enum AppRoutes {
  MAIN = 'main',
  LOGIN = 'login',
  NOT_FOUND = 'not_found'
}

export const routes: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: '/main',
    element: <MainPage />,
  },
  [AppRoutes.LOGIN]: {
    path: '/login',
    element: <LoginPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
}
