import React, { useContext } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Auth from './components/Auth/Auth';
import Songs from './components/Songs/Songs';
import Header from './Header';
import { AuthContext } from './context/auth-context';

function App() {
  const { authStatus, setAuthStatus } = useContext(AuthContext);

  const routes = authStatus ? (
    <Switch>
      <Route path="/songs" component={Songs} />
      <Redirect to="/callback" />
    </Switch>
  ) : (
    <Switch>
      <Route path="/" component={Auth} />
      <Redirect to="/" />
    </Switch>
  );

  function backToLandingHandler() {
    return setAuthStatus(false)
  }

  return (
    <div>
      <Header backToLanding={backToLandingHandler} />
      {routes}
    </div>
  );
}

export default withRouter(App);
