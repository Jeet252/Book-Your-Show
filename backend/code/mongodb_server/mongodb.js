const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;

const connectdb = async () => {
  try {
    await mongoose.connect(uri);
    console.log("connected to database");
  } catch (error) {
    console.error(` failed to connect the database : ${error}`);
    process.exit(0);
  }
};

module.exports = connectdb;
