import { Router, request, response } from "express";
import * as jwt from "jsonwebtoken";

import LoginService from "../services/LoginService";

const authRouter = Router();

authRouter.post('/login', async (request, response) => {
    const data = request.body;

    const login = new LoginService();

    const user = await login.execute(data.email, data.password)

    if (user.code != 200) {
        return response.status(user.code).json({ error: user.data });
    }

    const token = jwt.sign(
        { userId: user.data.id, username: user.data.email },
        "@QEGTUI",
        { expiresIn: "3600h" }
    );

    return response.status(200).json({ token, ...user.data });
});

export default authRouter;
