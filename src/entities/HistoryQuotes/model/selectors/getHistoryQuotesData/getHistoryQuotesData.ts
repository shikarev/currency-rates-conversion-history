import { StateSchema } from 'app/providers/StoreProvider'

export const getHistoryQuotesData = (state: StateSchema) => state.historyQuotes?.data
