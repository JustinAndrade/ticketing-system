import {
  API_REQUEST_START,
  API_REQUEST_SUCCESS,
  API_REQUEST_FAILURE,
  LOGIN_REQUEST_START,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILURE,
  USER_LOGIN_REQUEST_START,
  USER_LOGIN_REQUEST_SUCCESS,
  USER_LOGIN_REQUEST_FAILURE,
} from "../actions";

const initialState = {
  error: null,
  authToken: null,
  user_id: null,
  user_data: null,
  users: [],
  tickets: [],
  makingApiRequest: false,
  isAuthenticated: false,
  isUserAuthenticated: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_REQUEST_START:
      return {
        ...state,
        makingApiRequest: true,
      };
    case API_REQUEST_SUCCESS:
      return {
        ...state,
        makingApiRequest: false,
        tickets: action.payload || state.tickets,
        users: action.payload || state.users,
      };
    case API_REQUEST_FAILURE:
      return {
        ...state,
        makingApiRequest: false,
        error: action.payload,
      };
    case LOGIN_REQUEST_START:
      return {
        ...state,
        makingApiRequest: true,
      };
    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        makingApiRequest: false,
        isAuthenticated: true,
        company_id: action.payload.id || state.company_id,
        user_id: action.payload.id || state.user_data,
        user_data: action.payload || state.user_data,
        ...action.payload,
      };
    case LOGIN_REQUEST_FAILURE:
      return {
        ...state,
        makingApiRequest: false,
        error: action.payload,
      };
    case USER_LOGIN_REQUEST_START:
      return {
        ...state,
        makingApiRequest: true,
      };
    case USER_LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        makingApiRequest: false,
        isUserAuthenticated: true,
        user_id: action.payload.id || state.user_data,
        user_data: action.payload || state.user_data,
        ...action.payload,
      };
    case USER_LOGIN_REQUEST_FAILURE:
      return {
        ...state,
        makingApiRequest: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
