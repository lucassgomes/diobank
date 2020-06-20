import Routes  from 'express';
import usersRouter from './users.routes';


const routes = Routes();

routes.use('/users',usersRouter);

export default routes;
