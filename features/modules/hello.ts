import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '@/features'

const name = 'hello'

export interface IHelloState {
  hello: string
}

const initialState = {
  hello: ''
}

const _ = createSlice({
  name,
  initialState,
  reducers: {
    updateHello (state: IHelloState, action: PayloadAction<string>) {
      state.hello = action.payload
    }
  }
})

export function updateHello (hello: string): AppThunk {
  return async function (dispatch) {
    dispatch(helloActions.updateHello(hello))
  }
}

export const HELLO = _.name
export const helloReducer = _.reducer
export const helloActions = _.actions
export const helloThunks = {
  updateHello
}
