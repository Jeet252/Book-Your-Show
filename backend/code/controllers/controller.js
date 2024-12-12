const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;
const tickets = require("../mongodb_server/schema");
const UserDetails = require("../mongodb_server/userSchema");
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
const signup = async (req, res) => {
  try {
    const { username, email, password, phone_no } = req.body;
    const userCreated = await UserDetails.create({
      username,
      email,
      password,
      phone_no,
    });
    res.status(201).json({
      msg: "ticket is successfull created",
      userId: userCreated.username.toString(),
    });
  } catch (error) {
    console.log(error);
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await UserDetails.findOne({
      email: email,
    });
    if (userExist) {
      const user = await userExist.comparePassword(password);

      if (user) {
        res.status(200).json({ status: "successful", user: userExist });
      } else {
        res.status(401).json({ messsage: "this Invalid email or password" });
      }
    } else {
      res.status(401).json({ messsage: "Invalid email or password" });
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = { movie, cinema, ticketdata, sendticketdata, signup, login };
