import { Router, Request, Response } from 'express';
import signupInit from '../controllers/signup-init';
import signinInit from '../controllers/signin-init';
import Signin from '../types/singin';

/** Inicializa as rotas */
const routes = Router();

routes.get('/', (req:Request, res:Response) => {
    if (!req) {
        return res.status(500).json({message: 'Server error'});
    }
    return res.status(404).json({message: 'Not Found'});
});

routes.post('/', (req:Request, res:Response) => {
    if (!req) {
        return res.status(500).json({message: 'Server error'});
    }
    return res.status(404).json({message: 'Not Found'});
});

routes.post('/signup', async (req:Request, res:Response) => {
    try {
        const userCreated = await signupInit(req.body);
        return res.status(201).json( { ...userCreated });
    } catch (error) {
        return res.status(400).json(`Erro: ${error}`);
    }
});

routes.post('/signin', async (req:Request, res:Response) => {
    try {
        const { email, password } = req.body;
        const responseUser = await signinInit({ email, password });
        const user:Signin = responseUser;
        if (user && user.status && user.status === 401) {
            return res.status(user.status).json(user.message);
        }
        const { token } = user;
        return res.json({ token });
    } catch (error) {
        return res.status(400).json(`Erro: ${error}`);
    }
})

export default routes;