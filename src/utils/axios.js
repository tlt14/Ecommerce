import axios from "axios";

const URL_server = "https://ecommerce-n3v5.onrender.com/";
const api = axios.create({
  baseURL: URL_server,
  withCredentials: true,
});

export default api;
