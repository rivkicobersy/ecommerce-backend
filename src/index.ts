import Fastify from "fastify";
import mercurius from "mercurius";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import resolvers from "./modules/resolvers";

dotenv.config();

const app = Fastify();

const schemaPath = path.join(__dirname, "modules", "schema.graphql");
const schema = fs.readFileSync(schemaPath, "utf8");

app.register(mercurius, {
  schema,
  resolvers,
  graphiql: true,
});

const start = async () => {
  try {
    const port = Number(process.env.PORT) || 4000;
    await app.listen({ port });
    console.log(`🚀 Server ready at http://localhost:${port}/graphiql`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
