import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import user from './user';
import story from './story';

export default function createRootReducer(history) {
  return combineReducers({
    user,
    story,
    router: connectRouter(history),
  });
}
