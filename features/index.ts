import {
  Action,
  ThunkAction,
  combineReducers,
  configureStore
} from '@reduxjs/toolkit'

import { HELLO, helloReducer } from '@/features/modules/hello'

const rootReducer = combineReducers({
  [HELLO]: helloReducer
})

const store = configureStore({ reducer: rootReducer })

export type RootState = ReturnType<typeof rootReducer>
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export default store
