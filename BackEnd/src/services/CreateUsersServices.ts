import {getRepository} from 'typeorm';
import User from '../models/User';
import AppError from '../errors/AppError';
import {hash} from 'bcryptjs';



interface Request {
  name: string;
  surname: string;
  email: string;
  phone: string;
  street: string;
  number: string;
  neighborhood: string;
  complement: string;
  city: string;
  state: string;
  zip: string;
  password: string;
}

class CreateUserService {
  public async execute(data :Request): Promise<User>{
    const userRepository = getRepository(User);

    const checkUserExists = await userRepository.findOne({
      where: { email: data.email },
    });

    if(checkUserExists){
      throw new AppError('Email address already used');
    }

    const hashedPassword = await hash(data.password, 8);

    const user = userRepository.create({
      ...data,
      password: hashedPassword,
    });

    await userRepository.save(user);
    return user;

  }

}
export default CreateUserService;
