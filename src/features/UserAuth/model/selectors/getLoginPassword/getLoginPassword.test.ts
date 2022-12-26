import { StateSchema } from 'app/providers/StoreProvider'
import { passwordRegex } from 'features/UserAuth/model/slice/loginSlice'
import { getLoginPassword } from './getLoginPassword'

describe('getLoginPassword.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        password: '321',
      },
    }
    expect(getLoginPassword(state as StateSchema)).toEqual('321')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginPassword(state as StateSchema)).toEqual(undefined)
  })

  it('password validation correct', () => {
    const password = 'qwertyA123'
    expect(passwordRegex.test(password)).toBe(true)
  })

  it('password validation incorrect', () => {
    const password = 'qwertyA123!'
    expect(passwordRegex.test(password)).toBe(false)
  })

  it('password validation correct with symbol _', () => {
    const password = 'qwertyA123_'
    expect(passwordRegex.test(password)).toBe(true)
  })

  it('password validation incorrect with @%#^_', () => {
    const password = 'qwerty@%#^_'
    expect(passwordRegex.test(password)).toBe(false)
  })
})
