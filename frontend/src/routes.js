import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import LandingPage from './pages/LandingPage'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/home" component={Home} />
    </Switch>
  );
}
