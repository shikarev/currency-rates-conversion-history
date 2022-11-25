import { StateSchema } from 'app/providers/StoreProvider'

export const getFirst = (state: StateSchema) => state.converter.first || 'USD'
