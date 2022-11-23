import { LoginSchema } from '../types/loginSchema'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice.test', () => {
  test('test set login', () => {
    const state: DeepPartial<LoginSchema> = { login: 'test@mail.ru' }
    expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('test@mail.ru'),
    )).toEqual({ login: 'test@mail.ru' })
  })

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' }
    expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('123123'),
    )).toEqual({ password: '123123' })
  })
})
