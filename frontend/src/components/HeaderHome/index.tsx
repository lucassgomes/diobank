import React from 'react';
import {FiBell} from 'react-icons/fi'

import './styles.scss'
import Logo from '../../assets/img/dio.png';

const HeaderHome = () => {
  return (
    <header>
    <div className="head">
      <img src={Logo} alt=""/>
      <FiBell className="bell" color={"#FCA024"} size={32} />
    </div>
  
      <nav className="site-nav">
        <ul>
          <li className="active"><a href="#0">Atividades</a></li>
          <li><a href="#0">Pagamentos</a></li>
          <li><a href="#0">Carteira</a></li>
          <li><a href="#0">Sair</a></li>
        </ul>
    </nav>  
  </header>
  )
};

export default HeaderHome;
