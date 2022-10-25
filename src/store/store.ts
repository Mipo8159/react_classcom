import {combineReducers, configureStore} from '@reduxjs/toolkit'
import cartReducer from './cart/cart.reducer'
import categoryReducer from './category/category.reducer'
import productReducer from './product/product.reducer'

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  category: categoryReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type AppState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store['dispatch']
