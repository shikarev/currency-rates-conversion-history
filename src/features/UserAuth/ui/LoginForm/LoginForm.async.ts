import React, { lazy } from 'react'

export const LoginFormAsync = lazy <React.FC>(() => import('./LoginForm'))
