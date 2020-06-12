import { uuid } from "uuidv4";
import Signup, { SignupInitParams } from "../types/singup";
import signupRepo from "../ports/repos/signup";

export default async (signupInitParams: SignupInitParams): Promise<Signup> => {
 const signup: Signup = {
    token: uuid(),
    initParams: signupInitParams,
    status: "IN_PROGRESS"
  };

  await signupRepo.insert(signup);
  const signedup:Signup = {...signup, status: "COMPLETE"}
  return signedup;  
};
