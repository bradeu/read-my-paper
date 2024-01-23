import mongoose from "../config/mongoose.js"

const informationSchema = new mongoose.Schema({
  username: String,
});

const Information = mongoose.model('Query', informationSchema);

export default Information;
