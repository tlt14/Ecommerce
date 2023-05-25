import React from 'react'
import { Link } from 'react-router-dom'

function SubTotal({ subTotal }) {
  return (
    <div className="mt-6 h-full rounded-lg border bg-white dark:bg-[#F0EC8B] p-6 shadow-md md:mt-0 md:w-1/3">
      <div className="mb-2 flex justify-between">
        <p className="text-gray-700 dark:text-[#2B2726]">Subtotal</p>
        <p className="text-gray-700 dark:text-[#2B2726]">
          {subTotal.toLocaleString()} vnđ
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-700 dark:text-[#2B2726]">Shipping</p>
        <p className="text-gray-700 dark:text-[#2B2726]">
          {'15000'.toLocaleString()} vnđ
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold dark:text-[#2B2726]">Total</p>
        <div>
          <p className="mb-1 text-lg font-bold dark:text-[#2B2726]">
            {(subTotal + 15000).toLocaleString()} vnđ
          </p>
          <p className="text-sm text-gray-700 dark:text-[#2B2726]">
            including VAT
          </p>
        </div>
      </div>
      <Link
        to="/check-out"
        className="mt-6 px-4 py-2 w-full rounded-md bg-blue-500  font-medium text-blue-50 hover:bg-blue-600"
      >
        Check out
      </Link>
    </div>
  )
}

export default SubTotal
