import React from 'react';
import './styles.scss';

import Header from '../../components/Header';
import Login from '../../components/Login';

import image from '../../assets/img/landing-page.svg';

const Home = () => {
  return (
    <>
      <div className="home-background">
      <div className="home-header">
        <Header />
      </div>
      <div className="home-content">
        <div className="home-content__image">
          <img src={image} alt="duas pessoas transferindo dinheiro"/>
        </div>
        <div className="home-content__user">
          <Login />
        </div>
      </div>
      </div>
    </>
  )
};

export default Home;
