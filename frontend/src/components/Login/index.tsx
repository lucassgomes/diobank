import React, { FormEvent, useState, ChangeEvent} from 'react';
import api from '../../services/api';
import { useHistory, Link } from 'react-router-dom';
import './styles.scss';

const Login = () => {

  const history = useHistory();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  const handleLogin = async (event: FormEvent) => {
   event.preventDefault();
   const data = {
    ...formData,
    address: 'Rua Francisco Souza Lima, 43, Dona Suzana, Florestal - MG',
    dateOfBirth: '1999-03-21'
  };
   await api.post('signin', data);
   setTimeout(() => {
    history.push('/home');
   }, 3000);
  }

  return (
    <>
      <div className="login-box">
        <h2>Faça seu login</h2>
        <form>
          <div className="user-box">
            <input type="email" name="email" onChange={handleInputChange} required />
            <label>E-mail</label>
          </div>
      <div className="user-box">
        <input type="password" name="password" onChange={handleInputChange} required/>
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
