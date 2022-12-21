import { useSelector } from 'react-redux'
import {
  FormEvent, memo, useCallback, useEffect,
} from 'react'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
  Button, FormHelperText, OutlinedInputProps, Typography,
} from '@mui/material'
import Arrow from 'shared/assets/icons/arrow.svg'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useLogin } from 'features/AuthByUsername/api/authApi'
import { ResultStatus, userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import {
  ErrorWrapperStyled,
  FormControlStyled,
  InputsWrapperStyled,
  LoginFormStyled,
  OutlinedInputStyled,
} from './styled'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginValidation } from '../../model/selectors/getLoginValidation/getLoginValidation'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'

export interface LoginFormProps {
  className?: string
}

const initialReducers: ReducersList = {
  login: loginReducer,
}

const LoginForm = memo(() => {
  const [userLogin, { data, isLoading }] = useLogin()

  const dispatch = useAppDispatch()
  const login = useSelector(getLoginUsername) || ''
  const password = useSelector(getLoginPassword) || ''
  const error = useSelector(getLoginError)
  const isValidate = useSelector(getLoginValidation)

  const onChangeUsername:OutlinedInputProps['onChange'] = useCallback((event) => {
    dispatch(loginActions.setLogin(event.target.value))
  }, [dispatch])

  const onChangePassword:OutlinedInputProps['onChange'] = useCallback((event) => {
    dispatch(loginActions.setPassword(event.target.value))
  }, [dispatch])

  const onLoginSubmit = useCallback((event: FormEvent) => {
    event.preventDefault()
    userLogin({ login, password })
  }, [userLogin, login, password])

  useEffect(() => {
    if (data) {
      if (data.result === ResultStatus.OK) {
        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data))
        dispatch(userActions.setAuthData(data))
      }

      if (data.result === ResultStatus.ERROR) {
        dispatch(loginActions.setError(data.error || ''))
      }
    }
  }, [data, dispatch])

  return (
    <DynamicModuleLoader
      removeAfterUnmount
      reducers={initialReducers}
    >
      <LoginFormStyled onSubmit={onLoginSubmit}>
        <InputsWrapperStyled>
          <FormControlStyled sx={{ mb: '15px' }} variant="outlined">
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

        <Button
          color="primary"
          variant="contained"
          sx={{ mt: '50px', '& span': { ml: '6px' } }}
          disabled={isLoading || !isValidate}
          type="submit"
        >
          Вход
          {' '}
          <span><Arrow /></span>
        </Button>

        <ErrorWrapperStyled>
          {error ? (
            <Typography
              sx={{
                fontSize: '12px',
                color: '#D32F2F',
              }}
            >
              {error}
            </Typography>
          ) : null}
        </ErrorWrapperStyled>
      </LoginFormStyled>
    </DynamicModuleLoader>
  )
})

export default LoginForm
