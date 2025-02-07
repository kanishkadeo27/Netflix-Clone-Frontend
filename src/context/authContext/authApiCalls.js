import axios from "axios";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutFn,
} from "./AuthActions";

// login api call
export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("auth/login", user);
    dispatch(loginSuccess(res?.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
// logout api call
export const logout = async (dispatch) => {
  dispatch(logoutFn());
  try {
    localStorage.removeItem("user");
    dispatch(logoutFn());
  } catch (error) {
    console.error(
      "Logout Error:",
      error.response ? error.response.data : error.message
    );
  }
};
