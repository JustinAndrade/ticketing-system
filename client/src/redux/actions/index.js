import axios from "axios";

export const API_REQUEST_START = "API_REQUEST_START";
export const API_REQUEST_SUCCESS = "API_REQUEST_SUCCESS";
export const API_REQUEST_FAILURE = "API_REQUEST_FAILURE";
export const LOGIN_REQUEST_START = "LOGIN_REQUEST_START";
export const LOGIN_REQUEST_SUCCESS = "LOGIN_REQUEST_SUCCESS";
export const LOGIN_REQUEST_FAILURE = "LOGIN_REQUEST_FAILURE";

const SWIFTTIX_API_DOMAIN = "http://localhost:5000";

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
    dispatch({
      type: LOGIN_REQUEST_SUCCESS,
      payload: { authToken: token, company_id: authData.id },
    });
  } catch (err) {
    dispatch({ type: LOGIN_REQUEST_FAILURE, payload: err });
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
