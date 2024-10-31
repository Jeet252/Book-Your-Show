const { mongoose, Schema } = require("mongoose");
const bcrypt = require("bcrypt");
const userDetails = new Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  phone_no: { type: String, require: true },
});
userDetails.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    next();
  }
  try {
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, saltRound);
    user.password = hash_password;
  } catch (error) {
    next(error);
  }
});

userDetails.methods.comparePassword = async function (password) {
  if (!this.isModified("password")) return next();
  return bcrypt.compare(password, this.password);
};
const UserDetails = mongoose.model("userDetails", userDetails);
module.exports = UserDetails;
