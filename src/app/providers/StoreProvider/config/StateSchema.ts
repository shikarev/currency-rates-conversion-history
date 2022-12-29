import { UserSchema } from 'entities/User'
import { LoginSchema } from 'features/UserAuth'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import {
  AnyAction, CombinedState, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit'
import { ExchangeRateSchema } from 'entities/ExchangeRate'
import { ConverterSchema } from 'entities/Converter/model/types/converter'
import { authApi } from 'shared/api'
import { currencyApi } from 'shared/api/endpoints/currencyApi'

export interface StateSchema {
  user: UserSchema
  converter: ConverterSchema
  [authApi.reducerPath]: ReturnType<typeof authApi.reducer>
  [currencyApi.reducerPath]: ReturnType<typeof currencyApi.reducer>

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

export interface ThunkConfig<T> {
  rejectValue: T;
  state: StateSchema;
}
