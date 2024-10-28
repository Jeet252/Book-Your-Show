
const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);


const movie = async (req, res) => {
  try {
    const database = client.db('BookYourShow');
    const moviesDetails = database.collection('Movies');
    const movies = await moviesDetails.find().toArray();
    
    return res.status(200).send(movies);
  } catch (error) {
    console.log(error);
  }
};
const cinema = async (req, res) => {
  try {
    const database = client.db('BookYourShow');
    const cinemasDetails = database.collection('Cinemas');
    const cinemas = await cinemasDetails.find().toArray();
    
    return res.status(200).send(cinemas);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { movie ,cinema };
