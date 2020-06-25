import { Router, request, response } from "express";

import LoginService from "../services/LoginService";

const authRouter = Router();

authRouter.post('/login', async (request, response) => {
    const data = request.body;

    const login = new LoginService();

    const user = await login.execute(data.email, data.password)

    return response.status(user.code).json({ data: user.msg });
});

export default authRouter;
