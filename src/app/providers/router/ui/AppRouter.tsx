import React, { memo, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AppRoutes, routes } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'
import { getUserAuthData } from 'entities/User'

const AppRouter = () => {
  const authData = useSelector(getUserAuthData)

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {authData ? (
          <>
            <Route path={routes[AppRoutes.MAIN].path} element={routes.main.element} />
            <Route path="*" element={<Navigate to={routes[AppRoutes.MAIN].path} replace />} />
          </>
        ) : (
          <>
            <Route path={routes[AppRoutes.LOGIN].path} element={routes.login.element} />
            <Route path="*" element={<Navigate to={routes[AppRoutes.LOGIN].path} replace />} />
          </>
        )}
      </Routes>
    </Suspense>
  )
}

export default memo(AppRouter)
