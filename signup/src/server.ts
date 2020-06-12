import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/routes';

/** 
 * Inicializa a aplicação
*/
const app:express.Application = express();

/** 
 * Configura para o server utilizar o body-parser 
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/**  
 * Aplica as rotas
*/
app.use(routes);
/** 
 * Define a porta
*/
app.set('port', 3002);
/**  
 * Inicializa o servidor node
*/
app.listen(app.get('port'), () => {
    console.info(`🤝 Server signup running on port ${app.get('port')}! `)
})
/** 
 * Exporta a applicação
*/
export default app;