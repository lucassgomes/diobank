  import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import Pagamentos from './components/Pagamentos';
import Perfil from './components/Perfil/perfil';

const Routes = () => {
  return (
    <BrowserRouter>
    <Route component={LandingPage} path="/" exact/>
      <Route component={Home} path="/home" exact />
      <Route component={Pagamentos} path="/pagamentos" exact />
      <Route component={Perfil} path="/perfil" exact />
    </BrowserRouter>
  );
}

export default Routes;
