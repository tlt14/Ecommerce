import axios from 'axios'

const URL_server = 'http://localhost:4000/'
const api = axios.create({
  baseURL: URL_server,
  withCredentials: true,
})

export default api
