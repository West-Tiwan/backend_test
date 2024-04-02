import express from "express";
import {User} from "../models/user.js";

const router = express.Router();
router.get("/", (req, res) => {
    res.send("Hello World");
});

router.get("/reg", async (req, res) => {
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

router.get("/:id", async (req, res) => {
    const {id} = req.params;

    const user = await User.findById(id);

    res.json({
        success: true,
        data: user,
    });
});

router.get("/all", async (req, res) => {
    const users = await User.find();

    res.json({
        success: true,
        data: users,
    });
});

export default router;