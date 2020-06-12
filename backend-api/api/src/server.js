import express from 'express';
import { Kafka } from 'kafkajs';
import bodyParser from 'body-parser';
import routes from './routes/routes';

/**
 * Instância o express
*/
const app = express();


/** 
 * Instância e conecta o kafka
*/
const kafka = new Kafka({
    clientId: 'diobank-api',
    brokers: ['localhost:9092'],
    retry: {
        initialRetryTime: 300,
        retries: 3,
    }
})

/** 
 * Instância o kafka producer
*/ 
const producer = kafka.producer();
const consumer = kafka.consumer({
    groupId: 'diobank-consumer',
    topic: 'dio-wallet',
    autoCommit: true,
    fetchMaxWaitMs: 1000,
    fetchMaxBytes: 1024 * 1024,
    encoding: 'utf8',
    fromOffset: false,
});
/** 
 * Configura para o server utilizar o body-parser 
*/
app.use(bodyParser.json());
/** 
 * Disponibiliza o kafka producer para todas as rotas 
*/
app.use((req, res, next) => {
    req.producer = producer;
    req.consumer = consumer;
    return next();
})


/*
 * Cadastro das rotas 
*/
app.use(routes);

/**
 * Configura a porta da aplicação 
*/
app.set('port',3001);

/** 
 * Função assincrona para executar o server 
*/
async function run() {
    await producer.connect();
    await consumer.connect();
    // TODO: Precisa criar um consumer?
    app.listen(app.get('port'), () => {
        console.info(`🚀 Server running on port ${app.get('port')}`);
    })
}

/** 
 * Executa a função para levantar o server
*/ 
run().catch(console.error);