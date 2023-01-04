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

export interface HistoryTableData extends HistoryDealsData {
    id: string
}

export interface HistoryQuotes {
    deals: HistoryDealsData[]
    result: string,
    error?: string
}

export interface HistoryQuotesSchema {
    data?: HistoryTableData[]
    isLoading: boolean
    error?: string
}
