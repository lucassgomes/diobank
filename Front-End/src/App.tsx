import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import "bootstrap/dist/css/bootstrap.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
};

export default App;
