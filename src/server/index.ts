import express from "express";
import morgan from "morgan";
import robotsRouter from "./routers/robotsRouters.js";
import cors from "cors";

export const app = express();
app.disable("x-powered-by");

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/robots", robotsRouter);
