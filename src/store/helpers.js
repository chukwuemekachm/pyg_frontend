/* eslint-disable import/prefer-default-export */
import { put } from 'redux-saga/effects';

export function* errorHandler(errorCb, error) {
  if (error.response) {
    return yield put(errorCb(error.response.data));
  }
  if (error.request) {
    return yield put(errorCb({ message: 'Your browser seems to be offline' }));
  }

  return null;
}
