import React, { Suspense, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from 'entities/User'
import { Loader } from 'shared/ui/Loader/Loader'
import { getUserInited } from 'entities/User/model/selectors/getUserInited/getUserInited'

function App() {
  const dispatch = useDispatch()
  const inited = useSelector(getUserInited)

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {})}>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <div className="content-page">
          {inited ? <AppRouter /> : null }
        </div>
      </Suspense>
    </div>
  )
}

export default App
