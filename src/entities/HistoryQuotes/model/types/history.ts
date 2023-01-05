export type HistoryId = string

export interface HistoryDealsData {
    asset: string
    finishDate: string
    finishQuote: string
    profit: string
    startDate: string
    startQuote: string
}

export interface HistoryQuotesData extends HistoryDealsData {
    id: string
}

export interface HistoryQuotes {
    deals: HistoryDealsData[]
    result: string,
    error?: string
}

export interface HistoryQuotesSchema {
    data: undefined | HistoryQuotesData[]
    isLoading: boolean
    error?: string
}
