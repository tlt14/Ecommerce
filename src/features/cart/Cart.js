import React, { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart, updateCartItemQuantity } from '../../services/cartService'
import CartItem from './CartItem'
import SubTotal from './SubTotal'

export function Cart() {
  const dispatch = useDispatch()
  const userId = useSelector((state) => state.auth?.user?._id) || null
  const { items, loading, error } = useSelector((state) => state.cart)

  useEffect(() => {
    userId && dispatch(getCart(userId))
  }, [dispatch, userId])

  const increaseQuantity = useCallback(
    async (productId, quantity) => {
      dispatch(
        updateCartItemQuantity(userId, { productId, quantity: quantity + 1 }),
      )
    },
    [dispatch, userId],
  )

  const decreaseQuantity = useCallback(
    async (productId, quantity) => {
      dispatch(
        updateCartItemQuantity(userId, { productId, quantity: quantity - 1 }),
      )
    },
    [dispatch, userId],
  )

  // subTotal
  const subTotal = useMemo(() => {
    return (
      items?.products?.reduce((total, item) => {
        return total + parseInt(item.productId.price) * parseInt(item.quantity)
      }, 0) || 0
    )
  }, [items])

  return (
    <div className="min-h-[30rem] bg-gray-100 pt-10 dark:bg-gray-800 ">
      <h1 className="mb-10 text-center text-2xl font-bold dark:text-white">
        Cart Items
      </h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-sm md:w-2/3 max-h-96 overflow-y-auto scroll-smooth ">
          {loading ? (
            <h1>Loading...</h1>
          ) : error ? (
            <h1>{error}</h1>
          ) : !!items?.products?.length ? (
            items.products.map((item) => (
              <CartItem
                key={item.productId._id}
                item={item}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                userId={userId}
              />
            ))
          ) : (
            <>
              <h1 className="text-center dark:text-gray-900 border border-sm rounded-sm dark:bg-[#F0EC8B] p-5">
                Your cart is empty !!!
              </h1>
            </>
          )}
        </div>
        {/* Sub total  */}
        <SubTotal subTotal={subTotal} />
      </div>
    </div>
  )
}

export default Cart
