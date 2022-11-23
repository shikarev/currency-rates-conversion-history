export interface ExchangeRateAssets {
    asset: string,
    startDate: string
    quote: string
}

export interface ExchangeRate {
    assets: Array<ExchangeRateAssets>
    result: string,
}

export interface ExchangeRateSchema {
    data?: ExchangeRate
    isLoading: boolean
    error?: string
}
