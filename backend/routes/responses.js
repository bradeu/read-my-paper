import express from "express";
import ResponsesController from "../controllers/responsesController.js";

const router = express.Router();

router.get("/", ResponsesController.getResponse);

export default router;