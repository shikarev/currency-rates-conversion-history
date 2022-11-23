import { StateSchema } from 'app/providers/StoreProvider'

export const getExchangeRateData = (state: StateSchema) => state.exchangeRate?.data
