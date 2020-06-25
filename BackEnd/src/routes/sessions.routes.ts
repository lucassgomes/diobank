import { Router, request, response } from "express";

import AuthenticateUserService from "../services/AuthenticateUserServices";

const sessionRouter = Router();

sessionRouter.post("/", async (request, response) => {
  const { email, password } = request.body;
  const authenticateUser = new AuthenticateUserService();

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });
  delete user.password;

  return response.json({ user, token });
});
export default sessionRouter;
