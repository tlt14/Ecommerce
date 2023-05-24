import api from '../utils/axios'

export const addOrder = async (data, callback) => {
  try {
    const res = await api.post('/orders', data)
    callback(res.data)
  } catch (err) {
    console.log(err)
  }
}
