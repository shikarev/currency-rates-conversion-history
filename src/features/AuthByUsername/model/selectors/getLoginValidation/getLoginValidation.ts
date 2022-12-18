import { StateSchema } from 'app/providers/StoreProvider'

export const getLoginValidation = (state: StateSchema) => state?.loginForm?.validation
