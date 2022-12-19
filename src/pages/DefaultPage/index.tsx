import React from 'react'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { Navigate } from 'react-router-dom'

const DefaultPage = () => {
  const isAuth = useSelector(getUserAuthData)

  if (isAuth) {
    return <Navigate to="/main" replace />
  }

  return <Navigate to="/login" replace />
}

export default DefaultPage
