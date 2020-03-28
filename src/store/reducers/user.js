import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_ERROR,
  LOGOUT_USER,
} from 'Store/actions/user';

const initialState = {
  status: {
    isAuthenticated: false,
    isLoading: false,
    isProfileFetched: false,
    hasError: false,
  },
  profile: {},
  error: {
    message: '',
    errors: [],
  },
};

export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: true,
          hasError: false,
        },
        error: initialState.error,
      };

    case LOGIN_USER_ERROR:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: false,
          hasError: true,
        },
        error: {
          ...initialState.error,
          ...payload,
        },
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: false,
          hasError: false,
          isAuthenticated: true,
        },
      };

    case FETCH_USER_PROFILE_REQUEST:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: true,
          hasError: false,
        },
        error: initialState.error,
      };

    case FETCH_USER_PROFILE_ERROR:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: false,
          hasError: true,
        },
        error: {
          ...initialState.error,
          ...payload,
        },
      };

    case FETCH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: false,
          hasError: false,
        },
        profile: payload,
      };

    case LOGOUT_USER:
      return {
        ...initialState,
      };

    default:
      return state;
  }
}
