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
    // OPEN or CLOSE
    handleCart: (state: CartState, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    },

    // ADD TO CART
    addToCart: (state: CartState, action: PayloadAction<ProductType>) => {
      const exists = state.cart.find((i: ProductType) => i._id === action.payload._id)

      if (exists) {
        exists.quantity++
      } else {
        state.cart = [...state.cart, {...action.payload, quantity: 1}]
      }

      state.total = state.cart.reduce((acc, item) => {
        return acc + item.price * item.quantity!
      }, 0)
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },

    // REMOVE FROM CART
    removeFromCart: (state: CartState, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((i: ProductType) => i._id !== action.payload)

      state.total = state.cart.reduce((acc, item) => {
        return acc + item.price * item.quantity!
      }, 0)

      localStorage.setItem('cart', JSON.stringify(state.cart))
    },

    // INCREMENT
    increment: (state: CartState, action: PayloadAction<string>) => {
      const item = state.cart.find((i: ProductType) => i._id === action.payload)
      item!.quantity++

      state.total = state.cart.reduce((acc, item) => {
        return acc + item.price * item.quantity!
      }, 0)
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },

    // DECREMENT
    decrement: (state: CartState, action: PayloadAction<string>) => {
      const item = state.cart.find((i: ProductType) => i._id === action.payload)
      item!.quantity = item!.quantity - 1 === 0 ? 1 : item!.quantity - 1

      state.total = state.cart.reduce((acc, item) => {
        return acc + item.price * item.quantity!
      }, 0)
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },

    // CLEAR
    clearCart(state: CartState) {
      state.cart = []
      state.total = 0
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },

    // SET CART ON PAGE LOAD
    setCartOnLoad(state: CartState, action: PayloadAction<ProductType[]>) {
      state.cart = action.payload
      state.total = state.cart.reduce((acc, item) => {
        return acc + item.price * item.quantity!
      }, 0)
    },
  },
})

export const {handleCart, addToCart, removeFromCart, decrement, increment, clearCart, setCartOnLoad} = cartReducer.actions
export default cartReducer.reducer
