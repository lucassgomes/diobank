import React, { FormEvent} from 'react';

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
            <input type="email" name="" required />
            <label>E-mail</label>
          </div>
      <div className="user-box">
        <input type="password" name="" required/>
        <label>Senha</label>
      </div>
      <div className="user-button">
        <a href="/" onClick={handleLogin}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        ENTRAR
      </a>
      </div>
      </form>
      </div>
    </>
  );
}

export default Login;
