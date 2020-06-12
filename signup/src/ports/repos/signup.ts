import Signup, { SignupStatus } from "../../types/singup";
import axios from 'axios';
import signupComplete from "../../controllers/signup-complete";

const endpoint:string = 'http://localhost:3000/api/users';

const insert = async (_signup: Signup): Promise<void> => {
  try { 
    const { fullname, email, password } = _signup.initParams;
    const { token } = _signup;
    await axios.post(endpoint, { fullname, email, password, token });
    signupComplete(token);
  } catch (error) {
    console.log(error);
    return error;
  }
};

const updateStatus = async (_signup: Signup, _newStatus: SignupStatus): Promise<Signup> => {
  const user = { ..._signup, status: _newStatus }
  return user;
};

const getByToken = async (_token: string): Promise<Signup> => {
  const query = await axios.get(`${endpoint}?token=${_token}`);
  const [userByToken] = query.data; 
  const user:Signup = userByToken;
  return user;
};

export default {
  insert,
  updateStatus,
  getByToken,
};
