import React, { useState, useCallback, useEffect, useContext } from 'react';

import Card from '../UI/Card/Card';
import { AuthContext } from '../../context/auth-context';
import classes from './Auth.module.scss';

function Auth() {
  const authContext = useContext(AuthContext);

  function loginHandler() {
    authContext.login();
  }

  return (
    <div className={classes.Auth}>
      <Card>
        <h2>Welcome!</h2>
        <button onClick={loginHandler}>Get Started</button>
      </Card>
    </div>
  );
}

export default Auth;
