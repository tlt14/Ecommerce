import { useEffect, useState } from 'react'
import { fetchProducts } from '../../services/productsService'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import api from '../../utils/axios'

export default function Products() {
  const dispatch = useDispatch()
  const [categories, setCategories] = useState([])
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    dispatch(fetchProducts(page, category, ''))
  }, [dispatch, page, category])
  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await api.get(`/categories`)
        setCategories(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchCategories()
  }, [])
  const { products, loading, error } = useSelector((state) => state.products)
  async function handleSearch(e) {
    e.preventDefault()
    dispatch(fetchProducts(page, '', search))
  }
  return (
    <div>
      {/* Title */}
      <div className="pt-8  bg-white dark:bg-[#1B2223]">
        <h1 className="text-center text-2xl font-bold text-gray-800 dark:text-[#F4FEFD]">
          All Products
        </h1>
      </div>
      {/* Tab Menu */}

      <form className="w-4/12 py-2 m-auto" onSubmit={handleSearch}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Adidas..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <div className="flex flex-wrap items-center  overflow-x-auto overflow-y-hidden justify-center bg-white text-gray-800 dark:bg-[#1B2223]">
        <Link
          onClick={() => setCategory('')}
          href="#_"
          className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-gray-600 dark:text-[#F4FEFD]  dark:hover:text-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
          <span className="capitalize">All</span>
        </Link>
        {categories.map((category) => (
          <Link
            key={category._id}
            onClick={() => setCategory(category._id)}
            href="#_"
            className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-gray-600 dark:text-[#F4FEFD]  dark:hover:text-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
            <span className="capitalize">{category.name}</span>
          </Link>
        ))}
      </div>
      {/* Product List */}
      <section className="py-6 bg-gray-100 dark:bg-[#1B2223]">
        <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {loading
            ? 'Loading'
            : error
            ? 'Error'
            : products &&
              products?.products?.map((product) => (
                <article
                  key={product._id}
                  className="rounded-xl bg-white dark:bg-[#0EF6CC] p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
                >
                  <Link to={`/product/${product._id}`}>
                    <div className="relative flex items-end overflow-hidden rounded-xl">
                      <img src={product.images[0]} alt={product.name} />
                      <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white dark:text-[#F4FEFD] duration-100 hover:bg-blue-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                          />
                        </svg>
                        <button className="text-sm">Add to cart</button>
                      </div>
                    </div>
                    <div className="mt-1 p-2">
                      <h2 className="text-slate-700 dark:text-[#1B2223] font-semibold">
                        {product.name}
                      </h2>
                      <p className="mt-1 text-sm text-slate-400 dark:text-slate-600">
                        {product.brand}
                      </p>
                      <div className="mt-3 flex items-end justify-between">
                        <p className="text-lg font-bold text-blue-500 dark:text-slate-900">
                          ${product.price}
                        </p>
                        <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                          </svg>
                          <button className="text-sm">Add to cart</button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
        </div>
      </section>

      {/* Pagination */}
      <nav aria-label="" className="pb-10">
        <ul className="inline-flex bg-gray-100 dark:bg-[#1B2223] justify-center w-full items-center -space-x-px">
          <li className={`${page === 1 && 'hidden'}`}>
            <a
              onClick={() => setPage(page - 1)}
              href="#_"
              className=" block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          {Array.from({ length: products.totalPages }, (_, i) => i + 1).map(
            (i) => {
              return (
                <li key={i}>
                  <a
                    onClick={() => setPage(i)}
                    href="#_"
                    className={`px-3 py-2 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                      page === i
                        ? 'bg-blue-500 dark:bg-slate-200'
                        : ' dark:bg-slate-700'
                    }`}
                  >
                    {i}
                  </a>
                </li>
              )
            },
          )}

          <li className={`${page === products.totalPages && 'hidden'}`}>
            <a
              href="#_"
              onClick={() => setPage(page + 1)}
              className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
      {/* Pagination */}
    </div>
  )
}
