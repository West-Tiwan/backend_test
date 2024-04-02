import express from "express";
import {createUser, getAllUsers, getUserByID, helloWorld} from "../controller/user.js";

const router = express.Router();
router.get("/", helloWorld);

router.get("/reg", createUser);

router.get("/all", getAllUsers);

router.get("/:id", getUserByID);

export default router;