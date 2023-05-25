import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../services/cartService'
import { toast } from 'react-toastify'
import { addOrder } from '../services/orderService'
import { clearCart } from '../features/cart/cartSlice'

function CheckOut(props) {
  const dispatch = useDispatch()
  const carts = useSelector((state) => state.cart.items)
  const userId = useSelector((state) => state.auth?.user?._id)
  useEffect(() => {
    userId && dispatch(getCart(userId))
  }, [dispatch, userId])

  const subTotal = useMemo(() => {
    return carts?.products?.reduce((total, item) => {
      return total + parseInt(item.productId.price) * parseInt(item.quantity)
    }, 0)
  }, [carts])
  const [address, setAddress] = React.useState('')
  const [phone, setPhone] = React.useState('')
  async function handlePlaceOrder() {
    const data = {
      userId,
      products: carts.products,
      totalPrice: subTotal + 15000,
      shippingAddress: address,
    }
    console.log(data)
    if (!address || !phone) {
      return toast.error('Please fill in all fields')
    } else {
      addOrder(data, (res) => {
        console.log(res)
        dispatch(clearCart())
      })
    }
  }
  return (
    <div>
      {/* <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
            <a href="#_" className="text-2xl font-bold text-gray-800">
            sneekpeeks
            </a>
            <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
            <div className="relative">
                <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                <li className="flex items-center space-x-3 text-left sm:space-x-4">
                    <a
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                    href="#_"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    </a>
                    <span className="font-semibold text-gray-900">Shop</span>
                </li>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                    />
                </svg>
                <li className="flex items-center space-x-3 text-left sm:space-x-4">
                    <a
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                    href="#_"
                    >
                    2
                    </a>
                    <span className="font-semibold text-gray-900">Shipping</span>
                </li>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                    />
                </svg>
                <li className="flex items-center space-x-3 text-left sm:space-x-4">
                    <a
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                    href="#_"
                    >
                    3
                    </a>
                    <span className="font-semibold text-gray-500">Payment</span>
                </li>
                </ul>
            </div>
            </div>
        </div> */}
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium dark:text-white">Order Summary</p>
          <p className="text-gray-400 ">Check your items.</p>
          <div className="mt-8 space-y-3 rounded-lg border bg-white dark:bg-slate-800 px-2 py-4 sm:px-6 max-h-96 scroll-smooth overflow-y-scroll">
            {carts?.products ? (
              carts?.products.map((item) => (
                <div
                  key={item.productId._id}
                  className="flex flex-col rounded-lg bg-white sm:flex-row dark:bg-[#F0EC8B]"
                >
                  <img
                    className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                    src={item.productId?.images[0]}
                    alt=""
                  />
                  <div className="flex w-full flex-col px-4 py-4">
                    <span className="font-semibold">{item.productId.name}</span>
                    <span className="float-right text-gray-400">
                      {item.size}
                    </span>
                    <p className="text-lg font-bold">${item.productId.price}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-gray-500">Không có sản phẩm nào</div>
            )}
          </div>
        </div>
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0 dark:bg-transparent dark:text-white">
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400 ">
            Complete your order by providing your payment details.
          </p>
          <div>
            <label
              htmlFor="email"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Email
            </label>
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="your.email@gmail.com"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
            </div>
            <label
              htmlFor="billing-address"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Address
            </label>
            <div className="flex flex-col sm:flex-row">
              <div className="relative flex-shrink-0 sm:w-full">
                <input
                  type="text"
                  id="billing-address"
                  name="billing-address"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Street Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <img
                    className="h-4 w-4 object-contain"
                    src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <label
              htmlFor="phone"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Phone
            </label>
            <div className="flex flex-col sm:flex-row">
              <div className="relative flex-shrink-0 sm:w-full">
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            {/* Total */}
            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Subtotal
                </p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  ${subTotal}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Shipping
                </p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  15000 vnđ
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Total
              </p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                {subTotal + 15000} vnđ
              </p>
            </div>
          </div>
          <button
            className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default CheckOut
