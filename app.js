import express from "express";
import userRouter from "./routes/user.js";

export const app = express();

app.use("/user", userRouter);
app.use(userRouter);
app.use(express.json());