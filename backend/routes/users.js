import express from "express";
import UsersController from "../controllers/usersController.js";
import User from "../models/users.js";

const router = express.Router();

router.get("/", UsersController.getUser);

export default router;