import { all, fork } from 'redux-saga/effects';

import userSaga from './user';
import storySaga from './story';

export default function* rootSaga() {
  yield all([fork(userSaga), fork(storySaga)]);
}
