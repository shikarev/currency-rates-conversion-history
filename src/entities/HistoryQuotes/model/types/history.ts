export interface HistoryDeals {
    asset: string
    finishDate: string
    finishQuote: string
    profit: string
    startDate: string
    startQuote: string
}

export interface HistoryTable extends HistoryDeals {
    id: string
}

export interface HistoryQuotes {
    deals: HistoryDeals[]
    result: string,
    error?: string
}

export interface HistoryQuotesSchema {
    data?: HistoryTable[]
    isLoading: boolean
    error?: string
}
