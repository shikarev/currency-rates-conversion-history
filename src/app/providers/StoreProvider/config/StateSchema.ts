import { UserSchema } from 'entities/User'
import { LoginSchema } from 'features/AuthByUsername'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import {
  AnyAction, CombinedState, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit'
import { ExchangeRateSchema } from 'entities/ExchangeRate'
import { converterSchema } from 'entities/Converter/model/types/converter'
import { authorizedApi, unauthorizedApi } from 'shared/api/api'

export interface StateSchema {
  user: UserSchema
  converter: converterSchema
  [unauthorizedApi.reducerPath]: ReturnType<typeof unauthorizedApi.reducer>
  [authorizedApi.reducerPath]: ReturnType<typeof authorizedApi.reducer>;

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
