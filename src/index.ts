import "./loadEnvirontment.js";
import connectDatabase from "./database/connectDatabase.js";
import { startServer } from "./server/routers/startServer.js";

const port = process.env.PORT ?? 4000;
const mongoDbUrl = process.env.MONGODB_URL!;

// eslint-disable-next-line no-implicit-coercion
await startServer(+port);
await connectDatabase(mongoDbUrl);
