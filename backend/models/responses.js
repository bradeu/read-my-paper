import mongoose from "../config/mongoose.js"

const responseSchema = new mongoose.Schema({
  username: String,
});

const Response = mongoose.model('Response', responseSchema);

export default Response;