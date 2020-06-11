import Signup, { SignupStatus } from "@src/types/singup";
import { Kafka, CompressionTypes } from 'kafkajs';
import { v4 as uuidv4 } from 'uuid';

const kafka = new Kafka({
  clientId: 'diobank-api',
  brokers: ['localhost:9092'],
  retry: {
      initialRetryTime: 300,
      retries: 10,
  }
})

const insert = async (_singup: Signup): Promise<void> => {
  try { 
    const insertProducer = kafka.producer();
    const insertConsumer = kafka.consumer({
      groupId: 'diobank-consumer'
  });
  insertProducer.send({
    topic: 'issue-wallet',
    compression: CompressionTypes.GZIP,
    messages: [
      {
        value: JSON.stringify({
          ..._singup,
          token: uuidv4(),
        })
      }
    ]
  })
    const userSignin = new Promise((resolve, rejecjt) => {
      resolve(insertProducer);
    })
    const userSignuped = new Promise((resolve, reject) => {
      resolve(insertConsumer);
    })
    const singupResolved = Promise.all([userSignin, userSignuped]);
    
    console.log("Signup -> ", singupResolved);
  } catch (error) {
    console.log(error);
    return error;
  }
};

const updateStatus = async (_singup: Signup, _newStatus: SignupStatus): Promise<Signup> => {
  throw new Error("Not implemented");
};

const getByToken = async (_token: string): Promise<Signup> => {
  throw new Error("Not implemented");
};

export default {
  insert,
  updateStatus,
  getByToken,
};
