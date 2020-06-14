import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
};

export default App;
