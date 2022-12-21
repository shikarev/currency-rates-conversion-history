import { Typography } from '@mui/material'
import { Suspense } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'
import { ContentBoxStyled, TitleBoxStyled, WidgetBoxStyled } from './styled'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'

const LoginWidget = () => (
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
)

export { LoginWidget }
