const { mongoose, Schema } = require("mongoose");
const userDetails = new Schema({
  username: String,
  email: String,
  password: String,
  phone_no: String,
});

const UserDetails = mongoose.model("userDetails", userDetails);
module.exports = UserDetails;
