import { getRepository } from 'typeorm';
import User from '../models/User';
import AppError from '../errors/AppError';
import { compareSync } from 'bcryptjs';

export interface Result {
    msg: string | object;
    code: number;
}

class LoginService {

    public async execute(email: string, password: string): Promise<Result> {
        const userRepository = getRepository(User);

        const user = await userRepository.findOne({
            where: { email },
        });

        if (!user) {
            return { msg: 'Email or Passord incorrect', code: 400 }
        }

        if (!compareSync(password, user.password)) {
            return { msg: 'Email or Passord incorrect', code: 400 }
        }

        return { msg: user, code: 200 };
    }
}
export default LoginService;
