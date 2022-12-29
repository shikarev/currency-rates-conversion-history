export interface Asset {
    from: string,
    to: string,
}

export interface TransformedCurrencyPair {
    asset: Asset
    quote: number
}

export interface ConverterSchema {
    currencyPairList: TransformedCurrencyPair[]
    amount?: number,
    assetFrom: string,
    assetTo: string,
    fromAssetsList: string[],
    toAssetsList: string[],
    isLoading: boolean,
    total?: number
}
