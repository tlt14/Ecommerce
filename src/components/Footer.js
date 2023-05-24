import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 ">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold mb-2">Thông tin liên hệ</h3>
          <p className="mb-4">Số 123, đường ABC, Quận XYZ, TP HCM</p>
          <p className="mb-4">Email: contact@company.com</p>
          <p>Số điện thoại: 0123456789</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Kết nối với chúng tôi</h3>
          <ul className="flex space-x-4">
            <li>
              <a href="#_">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white hover:text-gray-400 transition duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#_">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white hover:text-gray-400 transition duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#_">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white hover:text-gray-400 transition duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
