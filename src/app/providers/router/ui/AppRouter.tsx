import React, { memo, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { APP_ROUTES, routes } from 'shared/config/router/router'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'
import { getUserAuthData } from 'entities/User'

const AppRouter = () => {
  const authData = useSelector(getUserAuthData)

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {authData ? (
          <>
            <Route path={routes[APP_ROUTES.MAIN].path} element={routes.main.element} />
            <Route path="*" element={<Navigate to={routes[APP_ROUTES.MAIN].path} replace />} />
          </>
        ) : (
          <>
            <Route path={routes[APP_ROUTES.LOGIN].path} element={routes.login.element} />
            <Route path="*" element={<Navigate to={routes[APP_ROUTES.LOGIN].path} replace />} />
          </>
        )}
      </Routes>
    </Suspense>
  )
}

export default memo(AppRouter)
