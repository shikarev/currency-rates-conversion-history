import { UserSchema } from 'entities/User'
import { LoginSchema } from 'features/AuthByUsername'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import {
  AnyAction, CombinedState, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit'
import { ExchangeRateSchema } from 'entities/ExchangeRate'
import { converterSchema } from 'entities/Converter/model/types/converter'
import { rtkApi } from 'shared/api/rtkApi'

export interface StateSchema {
  user: UserSchema
  converter: converterSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // Async Reducers
  login?: LoginSchema
  exchangeRate?: ExchangeRateSchema
  historyQuotes?: any
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>,
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends ToolkitStore<StateSchema> {
  reducerManager: ReducerManager
}
