import express from "express";
import QueriesController from "../controllers/queriesController.js";
import Query from "../models/queries.js"

const router = express.Router();

router.get("/", QueriesController.getQuery);

export default router;