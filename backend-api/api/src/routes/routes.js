import { Router } from 'express';
import { CompressionTypes } from 'kafkajs'
import axios from 'axios';
import db from '../../../../db/db.json';
import { v4 as uuidv4 } from 'uuid';
/** Aqui estão os endereços para os serviços que serão consumidos */
import conf from '../config/config';


/** 
 * Inicializa as rotas 
 */
const routes = Router();

/**  
 * Cria as rotas
 */
routes.get('/', async (req, res) => {
  return res.status(401).json({message: 'Sem permissão para essa rota'})
});

routes.post('/signup', async (req, res) => {
  const { email, password, fullname } = req.body;


  const userCreated = await axios.post(`${conf.services.signup}`, { fullname, email, password });
  if (userCreated.status === 201) {
  const { token } = userCreated.data;
  res.cookie('token', token, { maxAge: 86400000, httpOnly: true });
  return res.json({ 
    user: {
      fullname,
      email,
      token,
    }, 
    success: true,
  });
  }
  return res.status(400).json({ message: 'Ocorre um erro na geração do usuário!'})

  
  await req.producer.send({
    topic: 'dio-wallet',
    compression: CompressionTypes.GZIP,
    messages: [
      { value: JSON.stringify({
        email,
        fullname,
        password
      })}
    ]
  });
  /**  
   * Aqui vamos consumir o resultado do cadastro
  */
  await req.consumer.subscribe({
    topic: 'dio-wallet',
  });
  await req.consumer.run({
    eachMessage: async (args) => {
      try{
        const { message } = args;
        const { fullname, email, password } = JSON.parse(String(message.value));

        const userCreated = await axios.post(`${conf.services.signup}`, { fullname, email, password });
        if (userCreated.status === 201) {
        const { token } = userCreated.data;
        res.cookie('token', token, { maxAge: 86400000, httpOnly: true });
        return res.json({ 
          user: {
            fullname,
            email,
          }, 
          success: true,
        });
        }
        return res.status(400).json({ message: 'Ocorre um erro na geração do usuário!'})
      } catch (error) {
        return `Erro: ${error}`;
      }
    }
  });
})


routes.post('/login', async (req, res) => {
  const { email, password } = req.body;
    await req.producer.send({
        topic: 'dio-wallet',
        compression: CompressionTypes.GZIP,
        messages: [
            { value: JSON.stringify({
              email,
              password,
            })}
        ]
    });
    await req.consumer.subscribe({
      topic: 'dio-wallet',
    });
    await req.consumer.run({
      eachMessage: async (args) => {
        try{
          const { message } = args;
          const { email, password } = JSON.parse(String(message.value));

          const userFounded = await axios.post(`${conf.services.login}`, { email, password })
          if (userFounded.status !== 200 ) return res
            .status(404).json({error: true, message: 'Usuário ou email inválido!'});
          res.cookie('token', userFounded.data.token, { maxAge: 86400000, httpOnly: true });
          return res.json({ 
            ...userFounded.data, 
            success: true,
          });
        } catch (error) {
          return `Erro: ${error}`;
        }
      }
    });
});


export default routes;