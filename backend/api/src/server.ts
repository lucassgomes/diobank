import express, {Request, Response} from 'express';
import { Kafka, logLevel, Producer, Consumer } from 'kafkajs';
import cors from 'cors';
import routes from './routes';

const app = express();
app.use(express.json());

/**
 * Make connection with Kafka
 */
const kafka = new Kafka({
  clientId: 'api',
  brokers: ['localhost:9092'],
  logLevel: logLevel.WARN,
  retry: {
    initialRetryTime: 300,
    retries: 10
  },
});
 
/**
 * Define producers and consumers
 */
const producer : Producer = kafka.producer()
const consumerSignup : Consumer = kafka.consumer({ groupId: 'signup-group-receiver' })
const consumerBankAccount : Consumer = kafka.consumer({ groupId: 'bankaccount-group-receiver' })

/**
 * Middleware for producer
 */
app.use((req : Request, res: Response, next) => {
  req.producer = producer;
  return next();
});

/**
 * API uses routes and cors for express
 */
app.use(cors());
app.use(routes);

/**
 * Initialize endpoint and Kafka Producers/Consumers connections
 */
async function run() {
  await producer.connect();
  await consumerSignup.connect();
  await consumerBankAccount.connect();
  await consumerSignup.subscribe({ topic: 'signup-response' });
  await consumerBankAccount.subscribe({ topic: 'bankaccount-response' });

  await consumerSignup.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log('Conta iniciada\n');
      console.log('Criando conta para o usuário: ', JSON.parse(message.value.toString()))
    },
  });

  await consumerBankAccount.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log('Resposta: ', String(message.value));
    },
  });

  app.listen(3333);
}

run().catch(console.error)
