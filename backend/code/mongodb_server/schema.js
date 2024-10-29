const { mongoose, Schema } = require("mongoose");

const TicketSchema = new Schema({
  movieName: String,
  cinemaName: String,
  date: String,
  show: String,
  ticket_no: [{ class: String, seat_no: String }],
});
const tickets = mongoose.model("Ticket", TicketSchema);
module.exports = tickets;
