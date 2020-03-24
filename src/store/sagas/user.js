import {
  takeLatest, all, fork, call, put,
} from 'redux-saga/effects';

import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  FETCH_USER_PROFILE_REQUEST,
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
    yield put(loginUserSuccess(data));
    // eslint-disable-next-line no-underscore-dangle
    sessionStorage.setItem(storageKeys.__USER_TOKEN__, data.token);
    setAuthToken(data.token);
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

export default function* userSaga() {
  yield all([
    fork(watchLoginUserRequest),
    fork(watchFetchUserProfileRequest),
  ]);
}
