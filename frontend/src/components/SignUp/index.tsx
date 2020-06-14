import React, { FormEvent, useState, ChangeEvent} from 'react';
import api from '../../services/api';
import { useHistory, Link } from 'react-router-dom';
import './styles.scss';

const Login = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  const handleClick = async (event: FormEvent) => {
   event.preventDefault();
  //  const { fullname, email, password } = formData;
  const data = {
    ...formData,
    address: 'Rua Francisco Souza Lima, 43, Dona Suzana, Florestal - MG',
    dateOfBirth: '1999-03-21'
  };
    await api.post('signup', data);
    setTimeout(() => {
      history.push('/home');
    }, 1500);
  }

  return (
    <>
      <div className="login-box">
        <h2>Faça seu cadastro</h2>
        <form>
        <div className="user-box">
            <input type="text" name="fullname" onChange={handleInputChange} required />
            <label>Nome completo</label>
          </div>
          <div className="user-box">
            <input type="text" name="email" onChange={handleInputChange} required />
            <label>E-mail</label>
          </div>
        <div className="user-password">
          <div className="user-box">
            <input type="password" name="password" onChange={handleInputChange} required/>
            <label>Senha</label>
          </div>
          <div className="user-box">
            <input type="password" name="confirm-password" required/>
            <label>Repita a senha</label>
          </div>
        </div>
      <div className="user-button-login">
        <Link to="/home" onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        CADASTRAR
      </Link>
      </div>
      </form>
      </div>
    </>
  );
}

export default Login;
