import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ProductType} from '../../types/product.type'
import {WishlistState} from './types/wishlist.state'

const initialState: WishlistState = {
  wish: [],
}
export const wishlistReducer = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    // ADD TO CART
    addToWishlist: (state: WishlistState, action: PayloadAction<ProductType>) => {
      const exists = state.wish.find((i: ProductType) => i._id === action.payload._id)
      if (!exists) {
        state.wish.push(action.payload)
      }
      localStorage.setItem('wish', JSON.stringify(state.wish))
    },

    // REMOVE FROM CART
    removeFromWishlist: (state: WishlistState, action: PayloadAction<string>) => {
      state.wish = state.wish.filter((i: ProductType) => i._id !== action.payload)
      localStorage.setItem('wish', JSON.stringify(state.wish))
    },

    // CLEAR WISHLIST
    clearWishlist(state: WishlistState) {
      state.wish = []

      localStorage.setItem('wish', JSON.stringify(state.wish))
    },

    // SET WISHLIST ON PAGE LOAD
    setWishlistOnLoad(state: WishlistState, action: PayloadAction<ProductType[]>) {
      state.wish = action.payload
    },
  },
})

export const {addToWishlist, removeFromWishlist, clearWishlist, setWishlistOnLoad} = wishlistReducer.actions
export default wishlistReducer.reducer
