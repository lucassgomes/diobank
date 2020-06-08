import { Router } from 'express';
import { CompressionTypes } from 'kafkajs'

const routes = Router();

routes.post('/', async (req, res) => {
    const producerResp = await req.producer.send({
        topic: 'issue-wallet',
        compression: CompressionTypes.GZIP,
        messages: [
            { value: JSON.stringify({
                login: "usuario",
                pass: '121212', 
            })}
        ]
    });
    
    return res.json({ 
        producer: producerResp,
        message: 'Sucess!',
    });
});


export default routes;