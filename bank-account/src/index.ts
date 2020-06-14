import { Kafka, Consumer, Producer } from "kafkajs";

/**
 * Make connection with Kafka
 */
const kafka = new Kafka({
  brokers: ["localhost:9092"],
  clientId: "bankaccount",
});

/**
 * Define producers and consumers
 */
const producer : Producer = kafka.producer();
const consumer : Consumer = kafka.consumer({ groupId: "bankaccount-group" });

/**
 * Initialize bank-account microsservice
 */
async function run() {
  await consumer.connect();
  await consumer.subscribe({ topic: "issue-bankaccount" });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`;
      console.log(`- ${prefix} ${message.key}#${message.value}`);

      /**
       * ! TODO: Call controllers for create bank account here
       */

      producer.send({
        topic: "bankaccount-response",
        messages: [
          {
            value: `\nConta criada com sucesso! 😁\n`,
          },
        ],
      })
    },
  });
}
run().catch(console.error);
