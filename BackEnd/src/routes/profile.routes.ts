import { Router, request, response } from "express";
import { getRepository } from "typeorm";
import Profile from "../models/Profile";

import ensureAutenticated from "../middlewares/ensureAuthenticated";
import CreateProfile from "../services/CreateProfile";
import userRouter from "./users.routes";

const profileRouter = Router();

profileRouter.use(ensureAutenticated);

profileRouter.post('/', async (request, response) => {
  const {
    name,
    lastname,
    email,
    cellphone,
    logradouro,
    number,
    neighborhood,
    complement,
    city,
    state,
    cep,
  } = request.body;


  const createProfile = new CreateProfile();

  const userProfile = await createProfile.execute({
    name,
    lastname,
    email,
    cellphone,
    logradouro,
    number,
    neighborhood,
    complement,
    city,
    state,
    cep,
  });
  return response.json(userProfile);
});

export default profileRouter;
