import Routes  from 'express';
import usersRouter from './users.routes';
import sessionRouter from './sessions.routes';
import profileRouter from './profile.routes';


const routes = Routes();

routes.use('/users',usersRouter);
routes.use('/sessions',sessionRouter);
routes.use('/profile',profileRouter);

export default routes;
