import { UserSchema } from 'entities/User'
import { LoginSchema } from 'features/AuthByUsername'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import {
  AnyAction, CombinedState, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit'

export interface StateSchema {
  user: UserSchema

  // Async Reducers
  loginForm?: LoginSchema
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
