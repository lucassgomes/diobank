  import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import LandingPage from './pages/LandingPage';

const Routes = () => {
  return (
    <BrowserRouter>
    <Route component={LandingPage} path="/" exact/>
      <Route component={Home} path="/home" exact />
    </BrowserRouter>
  );
}

export default Routes;
