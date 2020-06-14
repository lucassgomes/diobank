import { Producer } from 'kafkajs';

declare global {
  namespace Express {
    interface Request {
      producer: Producer
    }
  }
}
