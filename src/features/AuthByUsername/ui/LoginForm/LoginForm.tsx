import { useSelector } from 'react-redux'
import React, { memo, useCallback } from 'react'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { FormHelperText, OutlinedInputProps } from '@mui/material'
import Arrow from 'shared/assets/icons/arrow.svg'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useLogin } from 'features/AuthByUsername/api/authApi'
import { ResultStatus, userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import {
  ErrorTypographyStyled,
  ErrorWrapperStyled,
  FormControlStyled,
  InputsWrapperStyled,
  LoginFormStyled,
  OutlinedInputStyled,
  SubmitButtonStyled,
} from './LoginForm.styled'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginIsValid } from '../../model/selectors/getLoginIsValid/getLoginIsValid'

export interface LoginFormProps {
  className?: string
}

const initialReducers: ReducersList = {
  login: loginReducer,
}

const LoginForm: React.FC = memo(() => {
  const [userLogin, { isLoading }] = useLogin()

  const dispatch = useAppDispatch()
  const login = useSelector(getLoginUsername) || ''
  const password = useSelector(getLoginPassword) || ''
  const error = useSelector(getLoginError)
  const isValid = useSelector(getLoginIsValid)

  const onChangeUsername:OutlinedInputProps['onChange'] = useCallback((event) => {
    dispatch(loginActions.setLogin(event.target.value))
  }, [dispatch])

  const onChangePassword:OutlinedInputProps['onChange'] = useCallback((event) => {
    dispatch(loginActions.setPassword(event.target.value))
  }, [dispatch])

  const onLoginSubmit:React.FormEventHandler = useCallback(async (event) => {
    event.preventDefault()
    const data = await userLogin({ login, password }).unwrap()
    if (data.result === ResultStatus.OK) {
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data))
      dispatch(userActions.setAuthData(data))
    }

    if (data.result === ResultStatus.ERROR) {
      dispatch(loginActions.setError(data.error || 'Неизвестная ошибка'))
    }
  }, [userLogin, login, password, dispatch])

  return (
    <DynamicModuleLoader
      removeAfterUnmount
      reducers={initialReducers}
    >
      <LoginFormStyled onSubmit={onLoginSubmit}>
        <InputsWrapperStyled>
          <FormControlStyled variant="outlined">
            <FormHelperText>Логин</FormHelperText>
            <OutlinedInputStyled
              value={login}
              onChange={onChangeUsername}
              placeholder="user@mail.ru"
              type="email"
              error={!!error}
            />
          </FormControlStyled>

          <FormControlStyled variant="outlined">
            <FormHelperText>Пароль</FormHelperText>
            <OutlinedInputStyled
              value={password}
              onChange={onChangePassword}
              error={!!error}
              placeholder="*********"
              type="password"
            />
          </FormControlStyled>
        </InputsWrapperStyled>

        <SubmitButtonStyled
          color="primary"
          variant="contained"
          disabled={isLoading || !isValid}
          type="submit"
        >
          Вход
          {' '}
          <span><Arrow /></span>
        </SubmitButtonStyled>

        <ErrorWrapperStyled>
          {!error ? null : (
            <ErrorTypographyStyled>
              {error}
            </ErrorTypographyStyled>
          )}
        </ErrorWrapperStyled>
      </LoginFormStyled>
    </DynamicModuleLoader>
  )
})

export default LoginForm
