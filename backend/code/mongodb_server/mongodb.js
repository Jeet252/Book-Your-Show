// const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);


const connectdb = async ()=>{
  try {
    const database = client.db('BookYourShow');
    const cinemas = database.collection('Cinemas');
    const movie = await cinemas.find().toArray();
    

  } catch (err){
    console.log(err)
  }
}
/*const connectdb = async () => {
  try {
    await mongoose.connect(uri);
    console.log("connected to database");
    
  } catch (error) {
    console.error(` failed to connect the database : ${error}`);
    process.exit(0);
  }
};
*/
module.exports = connectdb;
