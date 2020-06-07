import React, { FormEvent} from 'react';

import './styles.scss';

const Login = () => {
  const handleLogin = (event: FormEvent) => {
   event.preventDefault();
  }

  return (
    <>
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required />
            <label>Usuário</label>
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
        Submit
      </a>
      </div>
      </form>
      </div>
    </>
  );
}

export default Login;
