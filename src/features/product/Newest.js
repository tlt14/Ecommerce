import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../utils/axios'
import { memo } from 'react'
 function Newest() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    async function fetchNewEst() {
      try {
        const res = await api.get('/products/newest')
        setProducts(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchNewEst()
  }, [])
  return (
    <div className="bg-white dark:bg-transparent    ">
      <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-16 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-[#F4FEFD] pb-6">
          Newest
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link
              key={product._id}
              to={`/product/${product._id}`}
              className="group"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="max-h-98 w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700 dark:text-[#F4FEFD]">
                {product.name}
              </h3>
              <p className="mt-1 text-lg font-medium text-gray-900 dark:text-[#F4FEFD]">
                {product.price.toLocaleString()} vnđ
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
export default memo(Newest)