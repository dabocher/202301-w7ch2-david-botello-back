import "./loadEnvirontment.js";
import { startServer } from "./server/routers/startServer.js";

const port = process.env.PORT ?? 4000;

// eslint-disable-next-line no-implicit-coercion
await startServer(+port);
