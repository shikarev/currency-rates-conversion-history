import { StateSchema } from 'app/providers/StoreProvider'

export const getSecondItems = (state: StateSchema) => state.converter.secondItems || []
