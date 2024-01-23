import mongoose from "../config/mongoose.js"

const querySchema = new mongoose.Schema({
  username: String,
});

const Query = mongoose.model('Query', querySchema);

export default Query;
