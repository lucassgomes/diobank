import { getRepository } from 'typeorm';
import User from '../models/User';
import AppError from '../errors/AppError';
import { compareSync } from 'bcryptjs';

export interface Result {
    data: any;
    code: number;
}

class LoginService {

    public async execute(email: string, password: string): Promise<Result> {
        const userRepository = getRepository(User);

        const user = await userRepository.findOne({
            where: { email },
        });

        if (!user) {
            return { data: 'Email or Passord incorrect', code: 400 }
        }

        if (!compareSync(password, user.password)) {
            return { data: 'Email or Passord incorrect', code: 400 }
        }

        return { data: user, code: 200 };
    }
}
export default LoginService;
