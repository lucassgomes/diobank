import Routes  from 'express';
import usersRouter from './users.routes';
import sessionRouter from './sessions.routes';


const routes = Routes();

routes.use('/users',usersRouter);
routes.use('/sessions',sessionRouter);

export default routes;
