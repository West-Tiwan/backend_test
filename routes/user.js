import express from "express";
import {User} from "../models/user.js";
import {createUser, getAllUsers, getUserByID, helloWorld} from "../controller/user.js";

const router = express.Router();
router.get("/", helloWorld);

router.get("/reg", createUser);

router.get("/:id", getUserByID);

router.get("/all", getAllUsers);

export default router;