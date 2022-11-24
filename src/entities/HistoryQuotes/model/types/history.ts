export interface HistoryDeals {
    asset: string
    finishDate: string
    finishQuote: string
    profit: string
    startDate: string
    startQuote: string
}

export interface HistoryQuotes {
    deals: Array<HistoryDeals>
    result: string,
    error?: string
}

export interface HistoryTable extends HistoryDeals {
    id: string
}

export interface HistoryQuotesSchema {
    data?: HistoryQuotes
    isLoading: boolean
    error?: string
    table: Array<HistoryTable>
}
