export interface ExchangeRateAssets {
    asset: string,
    startDate: string
    quote: string
}

export interface ExchangeRate {
    assets: Array<ExchangeRateAssets>
    result: string,
}

export interface Table extends ExchangeRateAssets {
    id: string
    favorite: boolean
}

export interface ExchangeRateSchema {
    data?: ExchangeRate
    isLoading: boolean
    error?: string
    table: Array<Table>
}
