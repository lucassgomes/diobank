import Signin from "../types/singin";
import signinRepo from "../ports/repos/signin";

export default async (signin: Signin): Promise<object> => {
 const login: Signin = {
    ...signin,
  };

  const _login = await signinRepo.login(login);
  if (!_login) {
    return {status: 401, message: 'E-mail ou senha inválidos!'};
  }
  return _login;  
};
