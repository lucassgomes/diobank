import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/grafic.png';

import './styles.scss';
import HeaderHome from '../../components/HeaderHome';

const Pagamentos = () => {

  return (
    <>
    <div className="background">
    <HeaderHome />
    <h2 className="user"></h2>
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
            <button type="submit">inserir numero do boleto</button>
            {/* <button type="submit">Exportar</button> */}
          </div>

          <div className="button2">
            <button type="submit">...</button>
          </div>
        </div>

        <div className="transactions">
          <div className="user-box">
            <label>Numero da Conta</label>
            <input type="number" name="numeroConta" required/>
          </div>

            <div className="valueTrasactions">
              <li>- 900,00</li>
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
      </div>
    </>
  );
}

export default Pagamentos;
