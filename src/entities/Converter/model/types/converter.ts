export interface ConverterSchema {
    amount: string,
    assetFrom: string,
    assetTo: string,
    fromAssetsList: string[],
    toAssetsList: string[],
    isLoading: boolean,
    total: string
}
