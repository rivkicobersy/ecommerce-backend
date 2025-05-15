import Fastify from "fastify";
import mercurius from "mercurius";
import dotenv from "dotenv";

dotenv.config();

const app = Fastify();

const schema = `
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello from GraphQL with Fastify!",
  },
};

app.register(mercurius, {
  schema,
  resolvers,
  graphiql: true,
});

const start = async () => {
  try {
    await app.listen({ port: Number(process.env.PORT) || 4000 });
    console.log(`🚀 Server ready at http://localhost:${process.env.PORT || 4000}/graphiql`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
