import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import GlobalStyle from 'Styles/global.styles';
import Pages from 'Pages';
import ErrorBoundary from 'Helpers/ErrorBoundary';
import store, { history } from 'Store';
import { storageKeys } from 'Utils/constants';
import { setAuthToken } from 'Services/api';
import { loginUserSuccess } from 'Store/actions/user';

(function handleAuth() {
  // eslint-disable-next-line no-underscore-dangle
  const token = sessionStorage.getItem(storageKeys.__USER_TOKEN__);
  if (token) {
    setAuthToken(token);
    store.dispatch(loginUserSuccess({ token }));
  }
}());

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ErrorBoundary>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Pages />
          </ConnectedRouter>
        </Provider>
      </ErrorBoundary>
    </>
  );
}
