import React, { useState, FormEvent } from 'react';
import { Container, Col } from 'react-grid-system';

import './styles.scss';

import Header from '../../components/Header';
import Login from '../../pages/Login';
import SignUp from '../../pages/SignUp';
import Button from '../../components/Button';

import image from '../../assets/img/landing-page.svg';

const LandingPage = () => {
  const [visible, setVisible] = useState(false);

  const handleSignUp = (event: FormEvent) => {
    event.preventDefault();
     if (visible === false) {
       setVisible(true)
     } else {
       setVisible(false)
     }
  }

  return (
    <Container>
      <div className="landing-background">
        <Col lg={12} className="landing-header">
          <Header />
        </Col>
      <Col className="landing-content">
        <Col sm={5} className="landing-content__image">
          <img src={image} alt="duas pessoas transferindo dinheiro"/>
        </Col>
      <Col sm={5}className="landing-content__user">

        { visible ? ( 
          <>
          <Button 
            text="TENHO CONTA"
            handleClick={handleSignUp}
          />
          <SignUp />
          </>
          ) :
          <>
          <Button 
            text="CADASTRAR"
            handleClick={handleSignUp}
          />
          <Login />
          </>
          }
      </Col>
      </Col>
      </div>
    </Container>
  );
};

export default LandingPage;
