import express from "express";
import userRouter from "./routes/user.js";
import {connectDB} from "./data/DB.js";

const app = express();

connectDB();
app.use("/user", userRouter);
app.use(userRouter);
app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});