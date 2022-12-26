import { StateSchema } from 'app/providers/StoreProvider'
import { UserSchema } from '../types/user'

export const getUser = (state: StateSchema):UserSchema => state.user
