import { StateSchema } from 'app/providers/StoreProvider'

export const getFirstItems = (state: StateSchema) => state.converter.fromAssetList
