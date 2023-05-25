import { toast } from "react-toastify";
import api from "../utils/axios";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logout,
} from "../features/auth/authSlice";

export const login = (data) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const res = await api.post("/login", data);
    dispatch(loginSuccess(res.data.user));
    toast.success("Login success");
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};
export const getProfile = () => async (dispatch) => {
  try {
    dispatch(loginStart());
    const res = await api.get("/profile");
    dispatch(loginSuccess(res.data.user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};
export const logOut = () => async (dispatch) => {
  try {
    const res = await api.get("/logout");
    toast.success(res.data.message);
    dispatch(logout());
  } catch (error) {
    console.error(error.message);
  }
};
