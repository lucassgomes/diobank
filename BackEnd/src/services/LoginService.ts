class LoginService {

    public async execute(email: string, password: string) {
        return { email, password }
    }

}

export default LoginService;
