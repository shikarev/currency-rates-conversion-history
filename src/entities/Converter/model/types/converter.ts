import { CurrencyPair } from 'entities/ExchangeRate/model/types/exchangeRate'

export interface ConverterSchema {
    currencyPairList: CurrencyPair[]
    amount: string,
    assetFrom: string,
    assetTo: string,
    fromAssetsList: string[],
    toAssetsList: string[],
    isLoading: boolean,
    total: string
}
