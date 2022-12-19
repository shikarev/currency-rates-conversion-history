import { classNames } from 'shared/lib/classNames/classNames'
import { Box, Typography } from '@mui/material'
import { Suspense } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'
import { LoginFormAsync } from 'features/AuthByUsername/ui/LoginForm/LoginForm.async'
import { Navigate, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import cls from './LoginPage.module.scss'

const LoginPage = () => {
  const isAuth = useSelector(getUserAuthData)

  const navigate = useNavigate()

  if (isAuth) {
    return <Navigate to="/main" />
  }

  return (
    <Box
      className={cls.LoginPage}
    >
      <Box
        sx={{
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
          background: '#1A237E',
          height: '60px',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px',
        }}
      >
        <Typography variant="h5" noWrap>
          Вход в личный кабинет
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          padding: '1.6rem',
        }}
      >
        <Suspense fallback={<Loader />}>
          <LoginFormAsync onSuccess={() => navigate('/main')} />
        </Suspense>
      </Box>
    </Box>
  )
}

export default LoginPage
