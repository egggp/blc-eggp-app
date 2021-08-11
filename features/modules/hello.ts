import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '@/features'

const name = 'hello'

export interface IHelloState {
  hello: string,
  count: number
}

const initialState = {
  hello: '',
  count: 0
}

const _ = createSlice({
  name,
  initialState,
  reducers: {
    updateHello (state: IHelloState, action: PayloadAction<string>) {
      state.hello = action.payload
    },
    addCount (state: IHelloState) {
      state.count += 1
    }
  }
})

export function updateHello (hello: string): AppThunk {
  return async function (dispatch) {
    dispatch(helloActions.updateHello(hello))
  }
}

export function addCount (): AppThunk {
  return function (dispatch) {
    dispatch(helloActions.addCount())
  }
}

export const HELLO = _.name
export const helloReducer = _.reducer
export const helloActions = _.actions
export const helloThunks = {
  updateHello,
  addCount
}
