import { StateSchema } from 'app/providers/StoreProvider'
import { ExchangeRateItem } from 'entities/ExchangeRate/model/types/exchangeRate'

type GetExchangeRateData = (state: StateSchema) => ExchangeRateItem[] | undefined

export const getExchangeRateData: GetExchangeRateData = (state) => state.exchangeRate?.table
