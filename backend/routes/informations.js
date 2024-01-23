import express from "express";
import InformationsController from "../controllers/informationsController.js";
import Information from "../models/informations.js";

const router = express.Router();

router.get("/", InformationsController.getInformation);

export default router;