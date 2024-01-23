import express from "express";
import QueriesController from "../controllers/queriesController.js";

const router = express.Router();

router.get("/", QueriesController.getQuery);

export default router;