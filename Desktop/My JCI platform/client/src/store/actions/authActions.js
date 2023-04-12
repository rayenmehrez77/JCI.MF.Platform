import axios from "axios";

// action types
export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";
export const LOGOUT_USER = "LOGOUT_USER";

// action creators
export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_USER_REQUEST });
    const response = await axios.post("/api/login", { email, password });
    dispatch({ type: LOGIN_USER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: LOGIN_USER_FAILURE, payload: error.response.data });
  }
};

export const logoutUser = () => ({ type: LOGOUT_USER });
