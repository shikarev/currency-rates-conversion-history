import React, { Suspense, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from 'entities/User'
import { Loader } from 'shared/ui/Loader/Loader'
import { getUserInitialized } from 'entities/User/model/selectors/getUserInitialized/getUserInitialized'

function App() {
  const dispatch = useDispatch()
  const userInitialized = useSelector(getUserInitialized)

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {})}>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <div className="content-page">
          {userInitialized ? <AppRouter /> : null }
        </div>
      </Suspense>
    </div>
  )
}

export default App
