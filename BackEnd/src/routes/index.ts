import Routes  from 'express';
import authRouter from './auth.routes';
import usersRouter from './users.routes';


const routes = Routes();

routes.use('/auth',authRouter);
routes.use('/users',usersRouter);

export default routes;
