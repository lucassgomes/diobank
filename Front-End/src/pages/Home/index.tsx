import React from 'react';
import './styles.scss';

import HeaderHome from '../../components/HeaderHome';
import Resume from '../../pages/Resume';

const Home = () => {
  return (
    <>
      <div className="background">
        <HeaderHome />
        <Resume />
      </div>
    </>
  )
};

export default Home;
