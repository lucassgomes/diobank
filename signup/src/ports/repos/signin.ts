import Signin from "../../types/singin";
import axios from 'axios';

const endpoint:string = 'http://localhost:3000/api/users';

const login = async (_signin: Signin): Promise<Signin> => {
  try { 
    const { email, password } = _signin;
    const query = await axios.get(`${endpoint}?email=${email}&password=${password}`);
    const [userFound] = query.data;
    const user:Signin = userFound;
    return user
  } catch (error) {
    console.log(error);
    return error;
  }
};


export default {
  login,
};
