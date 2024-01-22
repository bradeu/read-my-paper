import express from "express";
import usersRouter from "./users.js"
import informationRouter from "./informations.js"
import queryRouter from "./queries.js"
import responseRouter from "./responses.js"

const router = express.Router();

router
    .use("/users", usersRouter)
    .use("/informations", informationRouter)
    .use("/queries", queryRouter)
    .use("/responses", responseRouter);

export default router

