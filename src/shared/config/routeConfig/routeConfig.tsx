import { RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { LoginPage } from 'pages/LoginPage'

type AppRouteProps = RouteProps & {
  path: string
  authorizedOnly?: boolean
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
    authorizedOnly: true,
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

/* export const RouterPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/main',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RouterPath.main,
    element: <MainPage />,
    authorizedOnly: true,
  },
  [AppRoutes.LOGIN]: {
    path: RouterPath.login,
    element: <LoginPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RouterPath.not_found,
    element: <NotFoundPage />,
  },
} */
