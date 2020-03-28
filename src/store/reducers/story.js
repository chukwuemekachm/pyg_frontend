import { LOGOUT_USER } from 'Store/actions/user';
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
} from 'Store/actions/story';

const initialState = {
  status: {
    isLoading: false,
    hasError: false,
  },
  selectedStory: {},
  stories: [],
  error: {
    message: '',
    errors: [],
  },
};

export default function storyReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGOUT_USER:
      return {
        ...initialState,
      };

    case FETCH_STORIES_REQUEST:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: true,
          hasError: false,
        },
        error: {
          ...initialState.error,
        },
      };

    case FETCH_STORIES_ERROR:
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

    case FETCH_STORIES_SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: false,
          hasError: false,
        },
        error: {
          ...initialState.error,
        },
        stories: payload.stories,
      };

    case SELECT_STORY_PREVIEW:
      return {
        ...state,
        selectedStory: state.stories.find((story) => story.id === payload.storyId) || {},
      };

    case FETCH_STORY_PREVIEW_REQUEST:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: true,
          hasError: false,
        },
        error: {
          ...initialState.error,
        },
      };

    case FETCH_STORY_PREVIEW_ERROR:
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

    case FETCH_STORY_PREVIEW_SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: false,
          hasError: false,
        },
        error: {
          ...initialState.error,
        },
        selectedStory: {
          ...state.selectedStory,
          ...payload.story,
        },
      };

    case CREATE_STORY_REQUEST:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: true,
          hasError: false,
        },
        error: {
          ...initialState.error,
        },
      };

    case CREATE_STORY_ERROR:
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

    case CREATE_STORY_SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: false,
          hasError: false,
        },
        error: {
          ...initialState.error,
        },
        selectedStory: {
          ...state.selectedStory,
          ...payload.story,
        },
        stories: [...state.stories, payload.story],
      };

    case UPDATE_STORY_REQUEST:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: true,
          hasError: false,
        },
        error: {
          ...initialState.error,
        },
      };

    case UPDATE_STORY_ERROR:
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

    case UPDATE_STORY_SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: false,
          hasError: false,
        },
        error: {
          ...initialState.error,
        },
        selectedStory: {
          ...state.selectedStory,
          ...payload.story,
        },
        stories: [payload.story, ...state.stories.filter((story) => story.id !== payload.story.id)],
      };

    case PROCESS_STORY_REQUEST:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: true,
          hasError: false,
        },
        error: {
          ...initialState.error,
        },
      };

    case PROCESS_STORY_ERROR:
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

    case PROCESS_STORY_SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: false,
          hasError: false,
        },
        error: {
          ...initialState.error,
        },
        selectedStory: {
          ...state.selectedStory,
          ...payload.story,
        },
      };

    default:
      return state;
  }
}
