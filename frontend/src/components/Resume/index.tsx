import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/grafic.png';

import './styles.scss';

const Resume = () => {

  return (
    <>
    <h2 className="user">Bem vindo, Iglá Generoso!</h2>
      <div className="box">
        <div className="box2">
        <div className="saldo">
          <p>Saldo Atual</p>
          <p>R$ 20.000,00</p>
        </div>

        <div className="box3">
          <Link to="/">
            <img src={Logo} alt=""/>
          </Link>
        </div>
        </div>

        <div className="recently">
          <div className="button1">    
            <button type="submit">Enviar</button>
            <button type="submit">Exportar</button>
          </div>

          <div className="button2">
            <button type="submit">...</button>
          </div>
        </div>

        <div className="transactions">
          <div className="subTransactions">
            <div className="historyTransactions">
              <li>08/06</li>
              <li>Fatura</li>
            </div>

            <div className="valueTrasactions">
              <li>- 900,00</li>
            </div>
            </div>
            <hr/>

            <div className="subTransactions">
            <div className="historyTransactions">
              <li>08/06</li>
              <li>Transferência</li>
            </div>

            <div className="valueTrasactions">
              <li>- 500,00</li>
            </div>
            </div>
            <hr/>

            <div className="subTransactions">
            <div className="historyTransactions">
              <li>08/06</li>
              <li>Compra</li>
            </div>

            <div className="valueTrasactions">
              <li>- 600,00</li>
            </div>
            </div>
            <hr/>

            <div className="subTransactions">
            <div className="historyTransactions">
              <li>08/06</li>
              <li>Depósito</li>
            </div>

            <div className="valueTrasactions">
              <li>+ 3.200,00</li>
            </div>
            </div>
            <hr/>
        </div>
      </div>
    </>
  );
}

export default Resume;
