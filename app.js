import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";

const app = express();

app.use("/user", userRouter);
app.use(userRouter);
app.use(express.json());

mongoose.connect("mongodb://localhost:27017", {
    dbName: "backend",
}).then(r => {
    console.log("Connected to MongoDB")
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});