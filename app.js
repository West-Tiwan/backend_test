import express from "express";
import userRouter from "./routes/user.js";
import {config} from "dotenv";

export const app = express();

config({path: "./data/config.env"});

app.use("/user", userRouter);
app.use(userRouter);
app.use(express.json());