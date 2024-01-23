import express from "express";
import UsersController from "../controllers/usersController.js";

const router = express.Router();

router.get("/", UsersController.getUser);

export default router;