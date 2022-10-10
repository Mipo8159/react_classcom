import {createSlice} from '@reduxjs/toolkit'
import {CartState} from './types/cart.state'

const initialState: CartState = {
  isOpen: false,
  cart: [],
  total: 0,
}
const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
})

export default cartReducer.reducer
