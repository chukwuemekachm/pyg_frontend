import {
  FETCH_STORIES_REQUEST,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_ERROR,
  FETCH_STORY_PREVIEW_REQUEST,
  FETCH_STORY_PREVIEW_SUCCESS,
  FETCH_STORY_PREVIEW_ERROR,
  SELECT_STORY_PREVIEW,
  CREATE_STORY_REQUEST,
  CREATE_STORY_SUCCESS,
  CREATE_STORY_ERROR,
  UPDATE_STORY_REQUEST,
  UPDATE_STORY_SUCCESS,
  UPDATE_STORY_ERROR,
  PROCESS_STORY_REQUEST,
  PROCESS_STORY_SUCCESS,
  PROCESS_STORY_ERROR,
} from './constants';

export const fetchStories = () => ({
  type: FETCH_STORIES_REQUEST,
});

export const fetchStoriesError = (payload) => ({
  type: FETCH_STORIES_ERROR,
  payload,
});

export const fetchStoriesSuccess = (payload) => ({
  type: FETCH_STORIES_SUCCESS,
  payload,
});

export const fetchStoryPreview = (payload) => ({
  type: FETCH_STORY_PREVIEW_REQUEST,
  payload,
});

export const fetchStoryPreviewError = (payload) => ({
  type: FETCH_STORY_PREVIEW_ERROR,
  payload,
});

export const fetchStoryPreviewSuccess = (payload) => ({
  type: FETCH_STORY_PREVIEW_SUCCESS,
  payload,
});

export const selectStoryPreview = (payload) => ({
  type: SELECT_STORY_PREVIEW,
  payload,
});

export const createStory = (payload) => ({
  type: CREATE_STORY_REQUEST,
  payload,
});

export const createStoryError = (payload) => ({
  type: CREATE_STORY_ERROR,
  payload,
});

export const createStorySuccess = (payload) => ({
  type: CREATE_STORY_SUCCESS,
  payload,
});

export const updateStory = (payload) => ({
  type: UPDATE_STORY_REQUEST,
  payload,
});

export const updateStoryError = (payload) => ({
  type: UPDATE_STORY_ERROR,
  payload,
});

export const updateStorySuccess = (payload) => ({
  type: UPDATE_STORY_SUCCESS,
  payload,
});

export const processStory = (payload) => ({
  type: PROCESS_STORY_REQUEST,
  payload,
});

export const processStoryError = (payload) => ({
  type: PROCESS_STORY_ERROR,
  payload,
});

export const processStorySuccess = (payload) => ({
  type: PROCESS_STORY_SUCCESS,
  payload,
});

export * from './constants';
