import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_ERROR,
} from './constants';

export const loginUser = (payload) => ({
  type: LOGIN_USER_REQUEST,
  payload,
});

export const loginUserError = (payload) => ({
  type: LOGIN_USER_ERROR,
  payload,
});

export const loginUserSuccess = (payload) => ({
  type: LOGIN_USER_SUCCESS,
  payload,
});

export const fetchUserProfile = (payload) => ({
  type: FETCH_USER_PROFILE_REQUEST,
  payload,
});

export const fetchUserProfileError = (payload) => ({
  type: FETCH_USER_PROFILE_ERROR,
  payload,
});

export const fetchUserProfileSuccess = (payload) => ({
  type: FETCH_USER_PROFILE_SUCCESS,
  payload,
});

export * from './constants';
