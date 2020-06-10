import React, { FormEvent} from 'react';

import './styles.scss';

const Login = () => {
  const handleClick = (event: FormEvent) => {
   event.preventDefault();
  }

  return (
    <>
      <div className="login-box">
        <h2>Faça seu cadastro</h2>
        <form>
        <div className="user-box">
            <input type="text" name="" required />
            <label>Nome completo</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required />
            <label>E-mail</label>
          </div>
        <div className="user-password">
          <div className="user-box">
            <input type="password" name="" required/>
            <label>Senha</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required/>
            <label>Repita a senha</label>
          </div>
        </div>
      <div className="user-button-login">
        <a href="/" onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        CADASTRAR
      </a>
      </div>
      </form>
      </div>
    </>
  );
}

export default Login;
