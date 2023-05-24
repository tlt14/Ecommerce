const {
  getProductsStart,
  getProductsSuccess,
  getProductsFailure,
} = require('../features/product/productSlice')
const { default: api } = require('../utils/axios')

const fetchProducts = (page, category, search) => async (dispatch) => {
  dispatch(getProductsStart())
  try {
    const res = await api.get(
      `/products?limit=8&page=${page}&category=${category}&search=${search}`,
    )
    dispatch(getProductsSuccess(res.data))
  } catch (error) {
    dispatch(getProductsFailure(error.message))
  }
}

export { fetchProducts }
