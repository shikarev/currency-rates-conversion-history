import { StateSchema } from 'app/providers/StoreProvider'

export const getAmount = (state: StateSchema) => state.converter.amount || ''
