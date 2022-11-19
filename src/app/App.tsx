import React, { Suspense, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {})}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
