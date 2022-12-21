import { Box, Typography } from '@mui/material'
import { Suspense } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import cls from './LoginWidget.module.scss'

const LoginWidget = () => (
  <Box
    className={cls.LoginWidget}
  >
    <Box
      className={cls.loginWidgetHeader}
    >
      <Typography variant="h5" noWrap>
        Вход в личный кабинет
      </Typography>
    </Box>

    <Box
      className={cls.loginWidgetContent}
    >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Box>
  </Box>
)

export { LoginWidget }
