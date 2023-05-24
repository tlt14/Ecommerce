import { configureStore } from '@reduxjs/toolkit'

import authSlice from './features/auth/authSlice'
import cartSlice from './features/cart/cartSlice'
import productSlice from './features/product/productSlice'
export const store = configureStore({
  reducer: { auth: authSlice, cart: cartSlice, products: productSlice },
})
