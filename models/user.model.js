const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, require: true, index: { unique: true } },
  password: { type: String, require: true },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
