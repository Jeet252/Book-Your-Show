const { mongoose, Schema } = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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

userDetails.methods.comparePassword = async function (password, next) {
  if (!this.isModified("password")) return next();
  return bcrypt.compare(password, this.password);
};

userDetails.methods.genreateAccessToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expirsIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
  return token;
};
userDetails.methods.genreateRefreshToken = function async() {
  const token = jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expirsIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
  return token;
};
const UserDetails = mongoose.model("userDetails", userDetails);
module.exports = UserDetails;
