import { Navigate, RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { LoginPage } from 'pages/LoginPage'

type AppRouteProps = RouteProps & {
  authOnly?: boolean
}

export enum AppRoutes {
  DEFAULT = 'default',
  MAIN = 'main',
  LOGIN = 'login',
  NOT_FOUND = 'not_found'
}

export const RouterPath: Record<AppRoutes, string> = {
  [AppRoutes.DEFAULT]: '/',
  [AppRoutes.MAIN]: '/main',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.DEFAULT]: {
    path: RouterPath.default,
    element: <Navigate to="login" />,
  },
  [AppRoutes.MAIN]: {
    path: RouterPath.main,
    element: <MainPage />,
    authOnly: true,
  },
  [AppRoutes.LOGIN]: {
    path: RouterPath.login,
    element: <LoginPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RouterPath.not_found,
    element: <NotFoundPage />,
  },
}
