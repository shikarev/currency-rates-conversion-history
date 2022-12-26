import React, { Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Loader } from 'shared/ui/Loader/Loader'
import SessionCheck from 'entities/User/ui/SessionCheck/SessionCheck'

function App() {
  return (
    <div className={classNames('app', {})}>
      <Suspense fallback={<Loader />}>
        <SessionCheck />
        <Navbar />
        <div className="content-page">
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
