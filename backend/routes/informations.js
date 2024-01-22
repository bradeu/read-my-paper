import express from express();
import InformationsController from "../controllers/informationsController";

const router = express.Router();

router.get("/", InformationsController.getInformation);

export default router;