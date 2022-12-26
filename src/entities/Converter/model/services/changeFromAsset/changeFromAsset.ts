import { createAsyncThunk } from '@reduxjs/toolkit'
import { Table } from 'entities/ExchangeRate/model/types/exchangeRate'
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { converterActions } from 'entities/Converter'

interface ChangeFromAssetProps {
    currentAssets: Table[],
    fromAsset: string,
}

export const changeFromAsset = createAsyncThunk<void, ChangeFromAssetProps, ThunkConfig<string>>(
  'converter/changeFromAsset',
  (changeData, thunkAPI) => {
    const { dispatch } = thunkAPI
    const { currentAssets, fromAsset } = changeData

    const filteredAssets = currentAssets.map((item) => (
      item.asset
    )).filter((item) => item.includes(`${fromAsset}/`))

    const toAssetsList = filteredAssets.map((item) => (
      item.split('/')[1]
    ))

    const assetTo = filteredAssets[0].split('/')[1]

    dispatch(converterActions.setAssetTo(assetTo))
    dispatch(converterActions.setAssetFrom(fromAsset))
    dispatch(converterActions.setToAssetsList(toAssetsList))
  },
)
