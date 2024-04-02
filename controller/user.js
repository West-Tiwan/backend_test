import {User} from "../models/user.js";

export const helloWorld = (req, res) => {
    res.send("Hello World");
};

export const createUser = async (req, res) => {
    const {name, email} = req.body;

    const createdItem = await User.create({
        name, email
    });

    res.json({
        success: true,
        message: "User created successfully",
        data: createdItem,
    });
};

export const getUserByID = async (req, res) => {
    const {id} = req.params;

    const user = await User.findById(id);

    res.json({
        success: true,
        data: user,
    });
};

export const getAllUsers = async (req, res) => {
    const users = await User.find();

    res.json({
        success: true,
        data: users,
    });
};