import {
  API_REQUEST_START,
  API_REQUEST_SUCCESS,
  API_REQUEST_FAILURE,
  LOGIN_REQUEST_START,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILURE,
} from "../actions";

const initialState = {
  error: null,
  company_id: null,
  user_id: null,
  tickets: [],
  makingApiRequest: false,
  isAuthenticated: false,
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
        company_id: action.payload.id,
        ...action.payload,
      };
    case LOGIN_REQUEST_FAILURE:
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
