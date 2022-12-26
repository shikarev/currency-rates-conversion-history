import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { Table } from 'entities/ExchangeRate/model/types/exchangeRate'
import { converterActions } from 'entities/Converter'

export const defaultAssets = createAsyncThunk<void, Table[], ThunkConfig<string>>(
  'converter/defaultAssets',
  (currentAssets, thunkAPI) => {
    const { dispatch } = thunkAPI

    const assets = currentAssets.map((item) => item.asset)

    const [fromAsset, toAsset] = assets[0].split('/')
    const fromAssets = assets.map((item) => item.split('/')[0])

    dispatch(converterActions.setAssetFrom(fromAsset))
    dispatch(converterActions.setAssetTo(toAsset))

    const fromAssetsList = fromAssets.filter((element, index) => fromAssets.indexOf(element) === index)
    const toAssetsList = assets.filter((item) => item.includes(`${fromAsset}/`)).map((item) => (
      item.split('/')[1]
    ))

    dispatch(converterActions.setFromAssetsList(fromAssetsList))
    dispatch(converterActions.setToAssetsList(toAssetsList))
  },
)
