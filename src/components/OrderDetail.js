import React from 'react'

function OrderDetail({ detail }) {
  return (
    <>
      {detail.map((item) => {
        return (
          <tr
            key={item._id}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <td className="w-32 p-4">
              <img
                src={item.productId.images[0]}
                alt={item.productId.name}
                className="rounded-lg"
              />
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {item.productId.name}
            </th>
            <td className="px-6 py-4">{item.size}</td>
            <td className="px-6 py-4">{item.quantity}</td>
            <td className="px-6 py-4">${item.productId.price}</td>
          </tr>
        )
      })}
    </>
  )
}

export default OrderDetail
