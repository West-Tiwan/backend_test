import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose.connect("mongodb://localhost:27017", {
    dbName: "backend",
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const User = mongoose.model("user", userSchema);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/users/all", async (req, res) => {
    const users = await User.find();
    res.json({
        success: true,
        users
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});