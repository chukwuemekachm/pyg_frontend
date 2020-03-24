export const LOGIN_VALIDATION_SCHEMA = 'LOGIN_VALIDATION_SCHEMA';

export default {
  [LOGIN_VALIDATION_SCHEMA]: {
    email: 'required|email|max:320',
    password: 'required|min:8',
  },
};
