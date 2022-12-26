import { LoginWidget } from 'features/UserAuth'
import React from 'react'
import { LoginPageBoxStyled } from './LoginPage.styled'

const LoginPage: React.FC = () => (
  <LoginPageBoxStyled>
    <LoginWidget />
  </LoginPageBoxStyled>
)

export default LoginPage
