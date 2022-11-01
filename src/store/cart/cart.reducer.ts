import {ProductType} from './../../types/product.type'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {CartState} from './types/cart.state'

const initialState: CartState = {
  isOpen: false,
  cart: [],
  total: 0,
}
const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    handleCart: (state: CartState, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    },
    addToCart: (state: CartState, action: PayloadAction<ProductType>) => {
      const exists = state.cart.find((i: ProductType) => (i._id = action.payload._id))
      if (exists) {
        exists.quantity++
      } else {
        state.cart.push({...action.payload, quantity: 1})
      }
    },
    removeFromCart: (state: CartState, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((i: ProductType) => i._id !== action.payload)
    },
    increment: (state: CartState, action: PayloadAction<string>) => {
      const item = state.cart.find((i: ProductType) => (i._id = action.payload))
      item!.quantity++
    },
    decrement: (state: CartState, action: PayloadAction<string>) => {
      const item = state.cart.find((i: ProductType) => (i._id = action.payload))
      item!.quantity = item!.quantity - 1 === 0 ? 0 : item!.quantity
    },
  },
})

export const {handleCart, addToCart, removeFromCart, decrement, increment} = cartReducer.actions
export default cartReducer.reducer
