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
    addToWishlist: (state: WishlistState, action: PayloadAction<ProductType>) => {
      const exists = state.wish.find((i: ProductType) => (i._id = action.payload._id))
      if (!exists) {
        state.wish.push(action.payload)
      }
    },
    removeFromWishlist: (state: WishlistState, action: PayloadAction<string>) => {
      state.wish = state.wish.filter((i: ProductType) => i._id !== action.payload)
    },
  },
})

export const {addToWishlist, removeFromWishlist} = wishlistReducer.actions
export default wishlistReducer.reducer
