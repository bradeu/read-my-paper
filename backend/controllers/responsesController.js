import Response from "../models/responses.js"

class ResponsesController {
    static async getResponse(req, res, next) {
        res.send(200).json({ data: "hello world" })
    }
};

export default ResponsesController;