import { Typography } from '@mui/material'
import React, { memo, Suspense } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'
import { ContentBoxStyled, TitleBoxStyled, WidgetBoxStyled } from './LoginWidget.styled'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'

const LoginWidget: React.FC = memo(() => (
  <WidgetBoxStyled>
    <TitleBoxStyled>
      <Typography variant="h5" noWrap>
        Вход в личный кабинет
      </Typography>
    </TitleBoxStyled>

    <ContentBoxStyled>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </ContentBoxStyled>
  </WidgetBoxStyled>
))

export { LoginWidget }
