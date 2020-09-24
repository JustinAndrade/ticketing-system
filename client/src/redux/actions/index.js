import axios from "axios";

export const API_REQUEST_START = "API_REQUEST_START";
export const API_REQUEST_SUCCESS = "API_REQUEST_SUCCESS";
export const API_REQUEST_FAILURE = "API_REQUEST_FAILURE";
export const LOGIN_REQUEST_START = "LOGIN_REQUEST_START";
export const LOGIN_REQUEST_SUCCESS = "LOGIN_REQUEST_SUCCESS";
export const LOGIN_REQUEST_FAILURE = "LOGIN_REQUEST_FAILURE";
export const USER_LOGIN_REQUEST_START = "USER_LOGIN_REQUEST_START";
export const USER_LOGIN_REQUEST_SUCCESS = "USER_LOGIN_REQUEST_SUCCESS";
export const USER_LOGIN_REQUEST_FAILURE = "USER_LOGIN_REQUEST_FAILURE";

const SWIFTTIX_API_DOMAIN = "http://localhost:5000";

// Login Requests

export const companyLogin = (authData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST_START });
  try {
    const { data } = await axios.post(
      `${SWIFTTIX_API_DOMAIN}/api/auth/company_login`,
      authData
    );
    const { token } = data;
    localStorage.setItem(
      "auth",
      JSON.stringify({
        company_id: authData.id,
        token,
      })
    );
    setTimeout(() => {
      dispatch({
        type: LOGIN_REQUEST_SUCCESS,
        payload: { authToken: token, company_id: authData.id },
      });
    }, 2000);
  } catch (err) {
    dispatch({ type: LOGIN_REQUEST_FAILURE, payload: err });
  }
};

export const userLogin = (authData) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST_START });
  try {
    const { data } = await axios.post(
      `${SWIFTTIX_API_DOMAIN}/api/auth/user_login`,
      authData
    );
    const { token } = data;
    const { user } = data;
    const { id, username, first_name, last_name, email } = user[0];
    localStorage.setItem(
      "userAuth",
      JSON.stringify({
        user: { id, username, first_name, last_name, email },
        token,
      })
    );
    setTimeout(() => {
      dispatch({
        type: USER_LOGIN_REQUEST_SUCCESS,
        payload: {
          userToken: token,
          user_data: { id, username, first_name, last_name, email },
        },
      });
    }, 2000);
  } catch (err) {
    dispatch({ type: USER_LOGIN_REQUEST_FAILURE, payload: err });
  }
};

// Data retrieval

export const getUsers = () => async (dispatch) => {
  dispatch({ type: API_REQUEST_START });
  try {
    const { data } = await axios.get(`${SWIFTTIX_API_DOMAIN}/api/companies/`);
    dispatch({ type: API_REQUEST_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: API_REQUEST_FAILURE, payload: err });
  }
};

export const getTickets = () => async (dispatch) => {
  dispatch({ type: API_REQUEST_START });
  try {
    const { data } = await axios.get(`${SWIFTTIX_API_DOMAIN}/tickets`);
    dispatch({ type: API_REQUEST_SUCCESS, payload: data.tickets });
  } catch (err) {
    dispatch({ type: API_REQUEST_FAILURE, payload: err });
  }
};
