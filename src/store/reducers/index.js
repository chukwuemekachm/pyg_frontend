import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import user from './user';
import story from './story';
import modal from './modal';

export default function createRootReducer(history) {
  return combineReducers({
    user,
    story,
    modal,
    router: connectRouter(history),
  });
}
