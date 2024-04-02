import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

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

app.get("/user/reg", async (req, res) => {
    // const users = await User.find();

    const {name, email} = req.body;

    const createdItem = await User.create({
        name, email
    });

    res.json({
        success: true,
        message: "User created successfully",
        data: createdItem,
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});