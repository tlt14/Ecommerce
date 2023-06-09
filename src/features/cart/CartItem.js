import React, { memo } from 'react'
import { removeFromCart } from '../../services/cartService'
import { useDispatch } from 'react-redux'

function CartItem({ item, increaseQuantity, decreaseQuantity, userId }) {
  const dispatch = useDispatch()
  async function handleRemoveItem(data) {
    if (window.confirm('Are you sure you want to remove this item?')) {
      dispatch(removeFromCart(userId, { productId: data }))
    }
  }
  return (
    <div className="justify-between mb-6 rounded-lg bg-white p-6 dark:bg-[#F0EC8B] shadow-md sm:flex sm:justify-start">
      <img
        src={item.productId?.images}
        alt={item.productId.name}
        className="w-full rounded-lg sm:w-40"
      />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900 dark:text-[#2B2726]">
            {item.productId.name}
          </h2>
          <p className="mt-1 text-xs text-gray-700">{item.size}</p>
        </div>
        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex items-center border-gray-100">
            <span
              className="cursor-pointer rounded-l bg-gray-100 dark:bg-[#8E43ED] py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
              onClick={() =>
                decreaseQuantity(item.productId._id, item.quantity)
              }
            >
              {' '}
              -{' '}
            </span>
            <input
              className="h-8 w-8 border bg-white dark:bg-[#403541] dark:text-white  text-center text-xs outline-none"
              type="text"
              value={item.quantity}
              min={1}
              onChange={(e) => console.log(e.target.value)}
            />
            <span
              className="cursor-pointer rounded-r bg-gray-100 dark:bg-[#8E43ED]  py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
              onClick={() =>
                increaseQuantity(item.productId._id, item.quantity)
              }
            >
              {' '}
              +{' '}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-xl font-bold">
              {item.productId?.price?.toLocaleString()}
            </p>
            <button
              onClick={() => {
                handleRemoveItem(item.productId._id)
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(CartItem)
