const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;
const tickets = require("../mongodb_server/schema");
const client = new MongoClient(uri);

const movie = async (req, res) => {
  try {
    const database = client.db("BookYourShow");
    const moviesDetails = database.collection("Movies");
    const movies = await moviesDetails.find().toArray();
    return res.status(200).send(movies);
  } catch (error) {
    console.log(error);
  }
};

const cinema = async (req, res) => {
  try {
    const database = client.db("BookYourShow");
    const cinemasDetails = database.collection("Cinemas");
    const cinemas = await cinemasDetails.find().toArray();

    return res.status(200).send(cinemas);
  } catch (error) {
    console.log(error);
  }
};

const ticketdata = async (req, res) => {
  try {
    const { movieName, cinemaName, date, show, ticket_no } = req.body;
    const ticketCreated = await tickets.create({
      movieName,
      cinemaName,
      date,
      show,
      ticket_no,
    });
    res.status(201).json({
      msg: "ticket is successfull created",
      userId: ticketCreated._id.toString(),
    });
  } catch (error) {
    console.log(error);
  }
};
const sendticketdata = async (req, res) => {
  try {
    const database = client.db("BookYourShow");
    const ticketdata = database.collection("tickets");
    const TD = await ticketdata.find().toArray();
    return res.status(200).send(TD);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { movie, cinema, ticketdata, sendticketdata };
