import React, { Suspense, lazy } from 'react';
import {
  Route, Switch, Redirect,
} from 'react-router-dom';

import SuspenseFallBack from 'Ui/SuspenseFallBack';

const LoginPage = lazy(() => import(/* webpackChunkName: "Login" */ 'Pages/LoginPage'));

export default function Pages() {
  return (
    <Suspense fallback={<SuspenseFallBack />}>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
}
