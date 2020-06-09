import React from 'react';
import './styles.scss';

import Header from '../../components/Header';
import Login from '../../components/Login';

import image from '../../assets/img/landing-page.svg';

const LandingPage = () => {
  return (
    <>
      <div className="landing-background">
      <div className="landing-header">
        <Header />
      </div>
      <div className="landing-content">
        <div className="landing-content__image">
          <img src={image} alt="duas pessoas transferindo dinheiro"/>
        </div>
        <div className="landing-content__user">
          <Login />
        </div>
      </div>
      </div>
    </>
  )
};

export default LandingPage;
