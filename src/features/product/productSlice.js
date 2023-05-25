import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  loading: false,
  error: null,
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProductsStart: (state) => {
      state.loading = true
    },
    getProductsSuccess: (state, action) => {
      state.loading = false
      state.products = action.payload
      state.error = null
    },
    getProductsFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const {
  getProductsStart,
  getProductsSuccess,
  getProductsFailure,
} = productSlice.actions

export default productSlice.reducer
