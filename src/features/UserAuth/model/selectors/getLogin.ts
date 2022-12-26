import { StateSchema } from 'app/providers/StoreProvider'
import { LoginSchema } from 'features/UserAuth'

export const getLogin = (state: StateSchema):LoginSchema | undefined => state.login
