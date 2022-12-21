import { StateSchema } from 'app/providers/StoreProvider'

export const getSecond = (state: StateSchema) => state.converter.assetTo
