import { Router, request, response } from "express";

import LoginService from "../services/LoginService";

const authRouter = Router();

authRouter.post('/login', async (request, response) => {
  const data = request.body;

  const login = new LoginService();

  const user = await login.execute(data.email, data.password)

  return response.json(user);
});

export default authRouter;
