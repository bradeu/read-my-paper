import { supabase } from "../config/supabase.js";

class InformationsController {
    static async getInformation(req, res, next) {
        res.send(200).json({ data: "hello world" })
    }
};

export default InformationsController;