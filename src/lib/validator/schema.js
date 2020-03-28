export const LOGIN_VALIDATION_SCHEMA = 'LOGIN_VALIDATION_SCHEMA';
export const STORY_VALIDATION_SCHEMA = 'STORY_VALIDATION_SCHEMA';
export const PROCESS_STORY_VALIDATION_SCHEMA = 'PROCESS_STORY_VALIDATION_SCHEMA';

export default {
  [LOGIN_VALIDATION_SCHEMA]: {
    email: 'required|email|max:320',
    password: 'required|min:8',
  },
  [STORY_VALIDATION_SCHEMA]: {
    summary: 'required|min:8',
    estimatedCompletionTime: 'required|date',
    cost: 'required|numeric',
  },
  [PROCESS_STORY_VALIDATION_SCHEMA]: {
    status: 'required',
  },
};
