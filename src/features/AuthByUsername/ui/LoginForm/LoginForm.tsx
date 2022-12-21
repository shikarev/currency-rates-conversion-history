import { classNames } from 'shared/lib/classNames/classNames'
import { useSelector } from 'react-redux'
import {
  ChangeEvent, FormEvent, memo, useCallback, useEffect,
} from 'react'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
  Button, FormControl, FormHelperText, OutlinedInput, OutlinedInputProps, Typography,
} from '@mui/material'
import Arrow from 'shared/assets/icons/arrow.svg'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useLogin } from 'features/AuthByUsername/api/authApi'
import { ResultStatus, userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginValidation } from '../../model/selectors/getLoginValidation/getLoginValidation'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import cls from './LoginForm.module.scss'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'

export interface LoginFormProps {
  className?: string
}

const initialReducers: ReducersList = {
  login: loginReducer,
}

const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props
  const [userLogin, { data, isLoading }] = useLogin()

  const dispatch = useAppDispatch()
  const login = useSelector(getLoginUsername) || ''
  const password = useSelector(getLoginPassword) || ''
  const error = useSelector(getLoginError)
  const isValidate = useSelector(getLoginValidation)

  const onChangeUsername:OutlinedInputProps['onChange'] = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(loginActions.setLogin(e.target.value))
  }, [dispatch])

  const onChangePassword:OutlinedInputProps['onChange'] = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(loginActions.setPassword(e.target.value))
  }, [dispatch])

  const onLoginSubmit = useCallback((e: FormEvent) => {
    e.preventDefault()
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
      <form className={classNames(cls.LoginForm, {}, [className])} onSubmit={onLoginSubmit}>
        <div className={cls.inputWrapper}>
          <FormControl sx={{ mb: '15px' }} variant="outlined">
            <FormHelperText sx={{ fontSize: '14px', color: '#000000', mb: '2px' }}>Логин</FormHelperText>
            <OutlinedInput
              value={login}
              onChange={onChangeUsername}
              placeholder="user@mail.ru"
              type="email"
              error={!!error}
              sx={{
                borderRadius: '5px',
                fontSize: '16px',
                '& .MuiOutlinedInput-input': {
                  p: '10px',
                },
              }}
            />
          </FormControl>

          <FormControl variant="outlined">
            <FormHelperText sx={{ fontSize: '14px', color: '#000000', mb: '2px' }}>Пароль</FormHelperText>
            <OutlinedInput
              value={password}
              onChange={onChangePassword}
              error={!!error}
              placeholder="*********"
              type="password"
              sx={{
                borderRadius: '5px',
                fontSize: '16px',
                '& .MuiOutlinedInput-input': {
                  p: '10px',
                },
              }}
            />
          </FormControl>
        </div>

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

        <div className={cls.errorWrapper}>
          {error
              && (
                <Typography
                  sx={{
                    fontSize: '12px',
                    color: '#D32F2F',
                  }}
                >
                  {error}
                </Typography>
              )}
        </div>
      </form>
    </DynamicModuleLoader>
  )
})

export default LoginForm
