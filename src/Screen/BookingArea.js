import React, { useState } from "react";
import "./BookingArea.css";
import BookingNavbar from "../Components/Booking/BookingNavbar";
import BookingHeader from "../Components/Booking/BookingHeader";
import TicketCounter from "../Components/Booking/TicketCounter";
import SeatArea from "../Components/Booking/SeatArea";
import { Link } from "react-router-dom";

export default function BookingArea() {
  const Cinema_Details = JSON.parse(localStorage.getItem("Cinema-Detail"));

  const [ticket, setTicket] = useState({
    movieName: Cinema_Details.movieName,
    cinemaName: Cinema_Details.name,
    date: `${new Date().getDate()}/${new Date().getMonth() + 1}`,
    show: "",
    display: false,
    no_tickets: 3,
    selectedTickets: 0,
    ticket_no: [],
  });
  const handleclick = () => {
    localStorage.setItem("Total-tickets", JSON.stringify(ticket));
    alert("Your Ticket is Successfully Booked");
  };
  return (
    <div className="booking-area-container">
      <BookingNavbar
        details={Cinema_Details}
        setTicket={setTicket}
        ticket={ticket}
      />
      <BookingHeader
        details={Cinema_Details}
        setTicket={setTicket}
        ticket={ticket}
      />

      <SeatArea setTicket={setTicket} ticket={ticket} />

      <TicketCounter setTicket={setTicket} ticket={ticket} />
      <div
        className="booking-bottom"
        style={{
          display:
            ticket.no_tickets !== ticket.selectedTickets ? "flex" : "none",
        }}
      >
        <span className="bb-available"></span>Available{" "}
        <span className="bb-selected"></span>Selected
      </div>
      <div
        className="ticket-price-paying-container"
        style={{
          display:
            ticket.no_tickets === ticket.selectedTickets ? "flex" : "none",
        }}
      >
        <div className="ticket-price-paying-content">
          <Link
            to="/Book-Your-Show"
            className="price-btn"
            onClick={() => handleclick()}
          >
            Price
          </Link>
        </div>
      </div>
    </div>
  );
}
