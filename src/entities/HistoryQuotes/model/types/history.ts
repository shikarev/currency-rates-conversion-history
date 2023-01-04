export interface HistoryId {
    id: string
}

export interface HistoryDealsData {
    asset: string
    finishDate: string
    finishQuote: string
    profit: string
    startDate: string
    startQuote: string
}

export interface HistoryQuotesData extends HistoryDealsData, HistoryId {}

export interface HistoryQuotes {
    deals: HistoryDealsData[]
    result: string,
    error?: string
}

export interface HistoryQuotesSchema {
    data?: HistoryQuotesData[]
    isLoading: boolean
    error?: string
}
