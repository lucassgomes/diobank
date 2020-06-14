import express, {Request, Response, Router} from 'express';
import { CompressionTypes } from 'kafkajs';

const routes : Router = express.Router();

routes.post('/signup', async (req: Request, res: Response) => {
  const {fullname, email, password, dateOfBirth, address} = req.body;
  
  const message = {
    fullname,
    email,
    password,
    dateOfBirth,
    address
  };

  // Call signup microsservice
  await req.producer.send({
    topic: 'issue-signup',
    compression: CompressionTypes.GZIP,
    messages: [
      { value: JSON.stringify(message) },
    ],
  });
  console.log('Ação iniciada... 🤝');
  return res.json({ ok: true });
});

routes.post('/signin', async (req : Request, res: Response) => {
  console.log(`Logando usuário... 🚀`);
  return res.json({ ok: true });
});

export default routes;
