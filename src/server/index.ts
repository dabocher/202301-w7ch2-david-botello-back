import express from "express";
import morgan from "morgan";
import robotsRouter from "./routers/robotsRouters.js";
import cors from "cors";

export const app = express();
const corsOptions = {
  origin: [
    "http://localhost/",
    "https://202301-w6chwe-sergio-fontal-david-bot.netlify.app/",
  ],
  methods: "GET,PUT,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.disable("x-powered-by");

app.use(morgan("dev"));
app.use(express.json());
app.use(cors(corsOptions));

app.use("/robots", robotsRouter);
