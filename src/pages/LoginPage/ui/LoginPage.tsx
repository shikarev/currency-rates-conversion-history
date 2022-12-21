import { Box } from '@mui/material'
import { LoginWidget } from 'features/AuthByUsername'
import cls from './LoginPage.module.scss'

const LoginPage = () => (
  <Box
    className={cls.LoginPage}
  >
    <LoginWidget />
  </Box>
)

export default LoginPage
