/* eslint-disable no-underscore-dangle */
import {
  takeLatest, all, fork, call, put,
} from 'redux-saga/effects';

import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  FETCH_USER_PROFILE_REQUEST,
  LOGOUT_USER,
  loginUserSuccess,
  loginUserError,
  fetchUserProfileSuccess,
  fetchUserProfileError,
} from 'Store/actions/user';
import api, { userRequests, setAuthToken } from 'Services/api';
import { errorHandler } from 'Store/helpers';
import { storageKeys } from 'Utils/constants';

function* loginUserSaga({ payload }) {
  try {
    const { data } = yield call([api, 'post'], userRequests.IDENTITY, payload);
    sessionStorage.setItem(storageKeys.__USER_TOKEN__, data.token);
    setAuthToken(data.token);

    yield put(loginUserSuccess(data));
  } catch (error) {
    yield fork(errorHandler, loginUserError, error);
  }
}

export function* watchLoginUserRequest() {
  yield takeLatest(LOGIN_USER_REQUEST, loginUserSaga);
}

function* fetchUserProfileSaga() {
  try {
    const { data } = yield call([api, 'get'], userRequests.IDENTITY);
    yield put(fetchUserProfileSuccess(data));
  } catch (error) {
    yield fork(errorHandler, fetchUserProfileError, error);
  }
}

export function* watchFetchUserProfileRequest() {
  yield takeLatest(FETCH_USER_PROFILE_REQUEST, fetchUserProfileSaga);
  yield takeLatest(LOGIN_USER_SUCCESS, fetchUserProfileSaga);
}

function* logoutUserSaga() {
  sessionStorage.removeItem(storageKeys.__USER_TOKEN__);
  yield;
}

export function* watchLogoutUser() {
  yield takeLatest(LOGOUT_USER, logoutUserSaga);
}

export default function* userSaga() {
  yield all([
    fork(watchLoginUserRequest),
    fork(watchFetchUserProfileRequest),
    fork(watchLogoutUser),
  ]);
}
