import { UserSchema } from 'entities/User'
import { authApi, LoginSchema } from 'features/UserAuth'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import {
  AnyAction, CombinedState, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit'
import { ExchangeRateSchema } from 'entities/ExchangeRate'
import { ConverterSchema } from 'entities/Converter/model/types/converter'

export interface StateSchema {
  user: UserSchema
  converter: ConverterSchema
  [authApi.reducerPath]: ReturnType<typeof authApi.reducer>

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
