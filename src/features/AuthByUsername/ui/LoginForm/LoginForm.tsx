import { classNames } from 'shared/lib/classNames/classNames'

import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { loginByResponse } from '../../model/services/loginByResponse/loginByResponse'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import cls from './LoginForm.module.scss'

export interface LoginFormProps {
  className?: string
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
}

const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props

  const dispatch = useDispatch()
  const login = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    dispatch(loginByResponse({ action: 'login', login, password }))
  }, [dispatch, login, password])

  return (
    <DynamicModuleLoader
      removeAfterUnmount
      reducers={initialReducers}
    >
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title="Форма авторизации" />

        <div className={cls.inputWrapper}>
          <Input
            type="text"
            className={classNames(cls.input)}
            placeholder="Введите login"
            onChange={onChangeUsername}
            value={login}
          />

          <Input
            type="text"
            className={classNames(cls.input)}
            placeholder="Введите пароль"
            onChange={onChangePassword}
            value={password}
          />
        </div>

        <div className={cls.ErrorWrapper}>
          {error && <Text text={error} theme={TextTheme.ERROR} />}
        </div>

        <Button
          theme={ButtonTheme.OUTLINE}
          className={classNames(cls.loginBtn)}
          disabled={isLoading}
          onClick={onLoginClick}
        >
          Войти
        </Button>
      </div>
    </DynamicModuleLoader>
  )
})

export default LoginForm
