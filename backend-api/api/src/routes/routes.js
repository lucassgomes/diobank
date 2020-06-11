import { Router } from 'express';
import { CompressionTypes } from 'kafkajs'
import db from '../../../../db/db.json';
import { v4 as uuidv4 } from 'uuid';


/** 
 * Inicializa as rotas 
 */
const routes = Router();

/**  
 * Cria as rotas
 */
routes.get('/', async (req, res) => {
  await req.consumer.subscribe({
    topic: 'issue-wallet',
  });
  await req.consumer.run({
    eachMessage: async (args) => {
      try{
        // console.info('Args -> ', args);
        const { message } = args;
        return res.json({ consumer: String(message.value)});
      } catch (error) {
        return `Erro: ${error}`;
      }
    }
  });
});
routes.post('/', async (req, res) => {
  const { email, password } = req.body;
  const { users } = db;
    await req.producer.send({
        topic: 'issue-wallet',
        compression: CompressionTypes.GZIP,
        messages: [
            { value: JSON.stringify({
              email,
              password,
            })}
        ]
    });
    await req.consumer.subscribe({
      topic: 'issue-wallet',
    });
    await req.consumer.run({
      eachMessage: async (args) => {
        try{
          const { message } = args;
          const { email, password } = JSON.parse(String(message.value));
          const [userFounded] = users.filter(user => user.email === email && user.password === password);
          const token = uuidv4();
          if (userFounded === 0 ) return res
            .status(404).json({error: true, message: 'Usuário ou email inválido!'});
          res.cookie('token', userFounded.token, { maxAge: 86400000, httpOnly: true });
          return res.json({ 
            success: true,
            user: { ...userFounded }, 
          });
        } catch (error) {
          return `Erro: ${error}`;
        }
      }
    });
});


export default routes;