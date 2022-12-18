import { classNames } from 'shared/lib/classNames/classNames'
import { useSelector } from 'react-redux'
import {
  ChangeEvent, memo, useCallback, useEffect,
} from 'react'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
  Button, FormControl, FormHelperText, OutlinedInput, Typography,
} from '@mui/material'
import Arrow from 'shared/assets/icons/arrow.svg'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginValidation } from '../../model/selectors/getLoginValidation/getLoginValidation'
import { loginByResponse } from '../../model/services/loginByResponse/loginByResponse'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import cls from './LoginForm.module.scss'

export interface LoginFormProps {
  className?: string
  onSuccess: () => void
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
}

const LoginForm = memo((props: LoginFormProps) => {
  const { className, onSuccess } = props

  const dispatch = useAppDispatch()
  const login = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const isValidate = useSelector(getLoginValidation)
  const error = useSelector(getLoginError)

  const onChangeUsername = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(loginActions.setUsername(e.target.value))
  }, [dispatch])

  const onChangePassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(loginActions.setPassword(e.target.value))
  }, [dispatch])

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByResponse({ login, password }))
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess()
    }
  }, [onSuccess, dispatch, login, password])

  useEffect(() => {
    const keyDownHandler = (event: { key: string; preventDefault: () => void }) => {
      if (event.key === 'Enter') {
        event.preventDefault()
        onLoginClick()
      }
    }

    document.addEventListener('keydown', keyDownHandler)

    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    }
  }, [onLoginClick])

  return (
    <DynamicModuleLoader
      removeAfterUnmount
      reducers={initialReducers}
    >
      <div className={classNames(cls.LoginForm, {}, [className])}>
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
          onClick={onLoginClick}
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
      </div>
    </DynamicModuleLoader>
  )
})

export default LoginForm
