import { Kafka, CompressionTypes, Consumer, Producer } from "kafkajs";
import SignUp, { SignupInitParams } from "./types/singup";
import signupInit from "./controllers/signup-init";

/**
 * Make connection with Kafka
 */
const kafka = new Kafka({
  brokers: ["localhost:9092"],
  clientId: "signup",
});

/**
 * Define producers and consumers
 */
const producer : Producer = kafka.producer();
const consumer : Consumer = kafka.consumer({ groupId: "signup-group" });

async function run() {
  await consumer.connect();
  await consumer.subscribe({ topic: "issue-signup" });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`;
      console.log(`- ${prefix} ${message.key}#${message.value}`);

      const signupParams: SignupInitParams = JSON.parse(message.value.toString());

      const signUp: SignUp = await signupInit(signupParams);
      
      /**
       * Send response for endpoint
       */
      producer.send({
        topic: "signup-response",
        messages: [
          {
            value: JSON.stringify(signUp),
          },
        ],
      });
      
      /**
       * Call bank-account microsservice
       */
      producer.send({
        topic: 'issue-bankaccount',
        compression: CompressionTypes.GZIP,
        messages: [
          { value: signUp.initParams.fullname },
        ],
      });
    },
  });
}

run().catch(console.error);
