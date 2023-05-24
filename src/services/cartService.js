import { toast } from 'react-toastify'
import { setError, setLoading, setCart } from '../features/cart/cartSlice'
import api from '../utils/axios'

export const addToCartRequest = (userId, data) => async (dispatch) => {
  // console.log(user)
  try {
    dispatch(setLoading())
    const res = await api.post(`/carts/${userId}/items`, data)
    dispatch(setCart(res.data))
    toast.success('Item added to cart')
  } catch (err) {
    setError(err.message)
  }
}

// Get cart from user
export const getCart = (userId) => async (dispatch) => {
  console.log('getCart', userId)
  try {
    dispatch(setLoading())
    const res = await api.get(`/carts/${userId}`)
    dispatch(setCart(res.data))
  } catch (err) {
    setError(err.message)
  }
}

// update qty
export const updateCartItemQuantity = (data) => async (dispatch) => {
  try {
    // dispatch(setLoading())
    const res = await api.put(`/carts/63176fd153de342c544db11a/items`, data)
    dispatch(setCart(res.data))
  } catch (err) {
    setError(err.message)
  }
}

// remove item
export const removeFromCart = (data) => async (dispatch) => {
  console.log('removeFromCart', data)
  try {
    // dispatch(setLoading())
    const res = await api.delete(`/carts/63176fd153de342c544db11a/items`, {
      data: data,
    })
    dispatch(setCart(res.data))
  } catch (err) {
    setError(err.message)
  }
}
