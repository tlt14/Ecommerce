import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import api from '../utils/axios'
import { useSelector } from 'react-redux'
import OrderDetail from '../components/OrderDetail'

function OrderHistory() {
  const [orders, setOrders] = useState([])
  const userId = useSelector((state) => state.auth?.user?._id)
  const [toggle, setToggle] = useState(false)
  const [detail, setDetail] = useState([])
  useEffect(() => {
    userId &&
      api.get(`/orders/${userId}`).then((res) => {
        setOrders(res.data)
      })
  }, [userId])
  function handelShowDetail(data) {
    setDetail(data)
    setToggle(true)
  }
  console.log('pro details', orders)
  return (
    <div className="container mx-auto px-4 min-h-[450px] max-h-[700px] overflow-auto bg-gray-400 p-10 ">
      <h1 className="text-2xl font-bold mb-4">Lịch sử đơn hàng</h1>
      <table className="min-w-full divide-y divide-gray-200 bg-gray-200 dark:bg-slate-800">
        <thead>
          <tr>
            <th className="px-6 py-3  text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
              Mã đơn hàng
            </th>
            <th className="px-6 py-3  text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
              Ngày tạo
            </th>
            <th className="px-6 py-3  text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
              Tên người nhận
            </th>
            <th className="px-6 py-3  text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
              Tổng tiền
            </th>
            <th className="px-6 py-3  text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3  text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders ? (
            orders.map((item, index) => {
              return (
                <tr key={item._id}>
                  <td className="px-6 py-3 bg-gray-50 dark:bg-slate-500 dark:text-white text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {item._id}
                  </td>
                  <td className="px-6 py-3 bg-gray-50 dark:bg-slate-500 dark:text-white text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {item.created_at}
                  </td>
                  <td className="px-6 py-3 bg-gray-50 dark:bg-slate-500 dark:text-white text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {item.userId.username}
                  </td>
                  <td className="px-6 py-3 bg-gray-50 dark:bg-slate-500 dark:text-white text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {item.totalPrice}
                  </td>
                  <td className="px-6 py-3 bg-gray-50 dark:bg-slate-500 dark:text-white text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {item.status}
                  </td>
                  <td className="px-6 py-3 bg-gray-50 dark:bg-slate-500 dark:text-white text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div>
                      {/* Modal toggle */}
                      <button
                        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                        onClick={() => handelShowDetail(item.products)}
                      >
                        Xem chi tiết
                      </button>
                      {/* Main modal */}
                    </div>
                  </td>
                </tr>
              )
            })
          ) : (
            <>Không có đơn hàng</>
          )}
        </tbody>
      </table>
      <div
        id="defaultModal"
        tabIndex={-1}
        aria-hidden="true"
        className={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-x-1/4 h-[calc(100%-1rem)] md:h-full ${
          toggle === false && 'hidden'
        }`}
      >
        <div className="relative w-full h-full max-w-2xl md:h-auto">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 m-auto">
            {/* Modal header */}
            <div className="flex items-center justify-center p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Chi tiết đơn hàng
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
                onClick={() => {
                  setToggle(false)
                }}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-6 space-y-6">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Image</span>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Product name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Size
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Detail */}
                    <OrderDetail detail={detail} />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderHistory
