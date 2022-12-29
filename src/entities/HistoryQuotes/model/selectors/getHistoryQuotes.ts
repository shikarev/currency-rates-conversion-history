import { StateSchema } from 'app/providers/StoreProvider'
import { HistoryQuotesSchema } from 'entities/HistoryQuotes'

export const getHistoryQuotes = (state: StateSchema):HistoryQuotesSchema | undefined => state.historyQuotes
