import React, { FormEvent} from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Login = () => {
  const handleLogin = (event: FormEvent) => {
   event.preventDefault();
  }

  return (
    <>
      <div className="login-box">
        <h2>Faça seu login</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required />
            <label>E-mail</label>
          </div>
      <div className="user-box">
        <input type="password" name="" required/>
        <label>Senha</label>
      </div>
      <div className="user-button">
        <Link to="/home" onClick={handleLogin}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          ENTRAR
        </Link>
      </div>
      </form>
      </div>
    </>
  );
}

export default Login;
