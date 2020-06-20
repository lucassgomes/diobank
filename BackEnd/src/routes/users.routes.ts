import { Router, request, response } from "express";

import CreateUsersServices from "../services/CreateUsersServices";

const userRouter = Router();

userRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const creatUser = new CreateUsersServices();

  const user = await creatUser.execute({
    name,
    email,
    password,
  })

  delete user.password;

  return response.json(user);
});

export default userRouter;
