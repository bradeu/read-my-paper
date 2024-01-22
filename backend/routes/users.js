import express from express();
import UsersController from "../controllers/usersController";

const router = express.Router();

router.get("/", UsersController.getUser);

export default router;