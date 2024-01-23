import mongoose from "../config/mongoose.js";

class UsersController {
  static async getUser(req, res, next) {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (error) {
      res.status(500).send('Error occurred: ' + error.message);
    }
}};

export default UsersController;