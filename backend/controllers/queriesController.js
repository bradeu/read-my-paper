import mongoose from "../config/mongoose.js";

class QueriesController {
    static async getQuery(req, res, next) {
        res.send(200).json({ data: "hello world" })
    }
};

export default QueriesController;