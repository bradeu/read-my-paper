import express from express();
import ResponsesController from "../controllers/responsesController";

const router = express.Router();

router.get("/", ResponsesController.getResponse);

export default router;