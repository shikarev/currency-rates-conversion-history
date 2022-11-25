import { StateSchema } from 'app/providers/StoreProvider'

export const getCurrencyPairList = (state: StateSchema) => state.exchangeRate?.table
