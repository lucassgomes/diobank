import { getRepository } from "typeorm";
import Profile from "../models/Profile";

interface Request {
  name: string;
  lastname: string;
  email: string;
  cellphone: string;
  logradouro: string;
  number: string;
  neighborhood: string;
  complement: string;
  city: string;
  state: string;
  cep: string;
}

class CreateProfile {
  public async execute({
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
  }: Request): Promise<Profile> {
    const profileRepository = getRepository(Profile);

    const profile = profileRepository.create({
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
    await profileRepository.save(profile);

    return profile;
  }
}
export default CreateProfile;
