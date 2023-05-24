import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  items: [],
  loading: false,
  error: null,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true
    },
    setCart: (state, action) => {
      state.items = action.payload
      state.loading = false
      state.error = null
    },
    setError: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    removeFromCart: (state, action) => {
      const { productId, size } = action.payload
      state.cartItems = state.cartItems.filter(
        (cartItem) =>
          !(cartItem.productId === productId && cartItem.size === size),
      )
    },
    clearCart: (state) => {
      state.items = []
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  clearCart,
  setLoading,
  setError,
  setCart,
} = cartSlice.actions

export default cartSlice.reducer
