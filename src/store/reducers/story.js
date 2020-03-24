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
    default:
      return state;
  }
}
