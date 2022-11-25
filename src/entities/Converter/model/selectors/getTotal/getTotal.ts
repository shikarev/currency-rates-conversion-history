import { StateSchema } from 'app/providers/StoreProvider'

export const getTotal = (state: StateSchema) => state.converter.total || ''
