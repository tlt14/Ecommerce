import api from '../../utils/axios'
import { loginFailure, loginStart, loginSuccess } from './authSlice'

export const login = (data) => async (dispatch) => {
  try {
    dispatch(loginStart())
    // Gọi API để đăng nhập và lấy thông tin user, sau đó dispatch loginSuccess với thông tin user được trả về
    const res = await api.post('/login', data)
    dispatch(loginSuccess(res.data.user))
  } catch (error) {
    dispatch(loginFailure(error.message))
  }
}
export const getProfile = () => async (dispatch) => {
  try {
    dispatch(loginStart())
    // Gọi API để đăng nhập và lấy thông tin user, sau đó dispatch loginSuccess với thông tin user được trả về
    const res = await api.get('/profile')
    dispatch(loginSuccess(res.data.user))
  } catch (error) {
    dispatch(loginFailure(error.message))
  }
}
