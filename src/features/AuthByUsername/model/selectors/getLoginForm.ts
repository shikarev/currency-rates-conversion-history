import { StateSchema } from 'app/providers/StoreProvider'
import { LoginSchema } from 'features/AuthByUsername'

export const getLoginForm = (state: StateSchema):LoginSchema | undefined => state.loginForm
