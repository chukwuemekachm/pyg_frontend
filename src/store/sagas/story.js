import {
  takeLatest, all, fork, call, put, select,
} from 'redux-saga/effects';

import {
  FETCH_STORIES_REQUEST,
  SELECT_STORY_PREVIEW,
  UPDATE_STORY_REQUEST,
  CREATE_STORY_REQUEST,
  fetchStoriesSuccess,
  fetchStoriesError,
  fetchStoryPreviewSuccess,
  fetchStoryPreviewError,
  createStoryError,
  createStorySuccess,
  updateStoryError,
  updateStorySuccess,
  PROCESS_STORY_REQUEST,
  processStorySuccess,
  processStoryError,
} from 'Store/actions/story';
import api, { storyRequests } from 'Services/api';
import { errorHandler } from 'Store/helpers';

function* fetchStoriesSaga() {
  try {
    const { data } = yield call([api, 'get'], storyRequests.STORY);
    yield put(fetchStoriesSuccess(data));
  } catch (error) {
    yield fork(errorHandler, fetchStoriesError, error);
  }
}

export function* watchFetchStoriesRequest() {
  yield takeLatest(FETCH_STORIES_REQUEST, fetchStoriesSaga);
}

function* fetchStoryPreviewSaga({ payload }) {
  try {
    const { user: { profile } } = yield select();
    if (profile.role === 'USER') return;
    const { data } = yield call([api, 'get'], storyRequests.SINGLE_STORY(payload.storyId));
    yield put(fetchStoryPreviewSuccess(data));
  } catch (error) {
    yield fork(errorHandler, fetchStoryPreviewError, error);
  }
}

export function* watchFetchStoryPreviewRequest() {
  yield takeLatest(SELECT_STORY_PREVIEW, fetchStoryPreviewSaga);
}

function* createStorySaga({ payload }) {
  try {
    const { data } = yield call([api, 'post'], storyRequests.STORY, payload);
    yield put(createStorySuccess(data));
  } catch (error) {
    yield fork(errorHandler, createStoryError, error);
  }
}

export function* watchCreateStoryRequest() {
  yield takeLatest(CREATE_STORY_REQUEST, createStorySaga);
}

function* updateStorySaga({ payload }) {
  try {
    const { story: { selectedStory } } = yield select();
    const { data } = yield call([api, 'put'], storyRequests.SINGLE_STORY(selectedStory.id), payload);
    yield put(updateStorySuccess(data));
  } catch (error) {
    yield fork(errorHandler, updateStoryError, error);
  }
}

export function* watchUpdateStoryRequest() {
  yield takeLatest(UPDATE_STORY_REQUEST, updateStorySaga);
}

function* processStorySaga({ payload }) {
  try {
    const { story: { selectedStory } } = yield select();
    const { data } = yield call([api, 'patch'], storyRequests.SINGLE_STORY(selectedStory.id), payload);
    yield put(processStorySuccess(data));
  } catch (error) {
    yield fork(errorHandler, processStoryError, error);
  }
}

export function* watchProcessStoryRequest() {
  yield takeLatest(PROCESS_STORY_REQUEST, processStorySaga);
}

export default function* storySaga() {
  yield all([
    fork(watchFetchStoriesRequest),
    fork(watchCreateStoryRequest),
    fork(watchUpdateStoryRequest),
    fork(watchFetchStoryPreviewRequest),
    fork(watchProcessStoryRequest),
  ]);
}
