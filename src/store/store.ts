import {combineReducers, configureStore} from '@reduxjs/toolkit'
import cartReducer from './cart/cart.reducer'

const rootReducer = combineReducers({
  cart: cartReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type AppState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store['dispatch']
