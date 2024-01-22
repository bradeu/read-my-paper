import { supabase } from "../config/supabase.js";

class UsersController {
    static async getUser(req, res, next) {
        res.send(200).json({ data: "hellow world" })
    }
};

export default UsersController;