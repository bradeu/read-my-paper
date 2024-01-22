import express from express();
import QueriesController from "../controllers/queriesController";

const router = express.Router();

router.get("/", QueriesController.getQuery);

export default router;