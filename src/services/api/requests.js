export const userRequests = {
  IDENTITY: '/identity',
};

export const storyRequests = {
  STORY: '/story',
  SINGLE_STORY: (storyId) => `/story/${storyId}`,
};

export default {
  user: userRequests,
  story: storyRequests,
};
