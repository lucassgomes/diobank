import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './styles.scss';

import Header from '../../components/Header';
import Login from '../../components/Login';
import SignUp from '../../components/SignUp';
import Button from '../../components/Button';

import image from '../../assets/img/landing-page.svg';

const LandingPage = () => {
  return (
    <Container>
      <div className="landing-background">
        <Col lg={12} className="landing-header">
          <Header />
        </Col>
      <Col lg={12} md={6} className="landing-content">
        <Col lg={6} md={3} sm={5} className="landing-content__image">
          <img src={image} alt="duas pessoas transferindo dinheiro"/>
        </Col>
      <Col lg={6}  md={3} sm={5}className="landing-content__user">
        <Button text="CADASTRAR"/>
        <Login />
      </Col>
      </Col>
      </div>
    </Container>
  );
};

export default LandingPage;
