import mongoose from "../config/mongoose.js"

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    user_id: Schema.Types.ObjectId,
    username: String,
    email: String,
});

const User = mongoose.model('User', userSchema);

export default User;
