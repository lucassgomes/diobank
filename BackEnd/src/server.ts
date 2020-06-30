import 'reflect-metadata';
import 'express-async-errors'
import './database';

import cors from 'cors';

import express,{Response, Request, NextFunction} from 'express';
import routes from './routes/index';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333,()=> {
  console.log('🏦 Server started on port: 3333');
})

app.use('/', routes);
