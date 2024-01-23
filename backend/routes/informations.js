import express from "express";
import InformationsController from "../controllers/informationsController.js";

const router = express.Router();

router.get("/", InformationsController.getInformation);

export default router;