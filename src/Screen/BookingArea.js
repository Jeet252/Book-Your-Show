import React, { useEffect, useState } from "react";
import "./BookingArea.css";
import BookingNavbar from "../Components/Booking/BookingNavbar";
import BookingHeader from "../Components/Booking/BookingHeader";
import TicketCounter from "../Components/Booking/TicketCounter";
import SeatArea from "../Components/Booking/SeatArea";
import { Link } from "react-router-dom";
import axios from "axios";

export default function BookingArea() {
  const Cinema_Details = JSON.parse(sessionStorage.getItem("Cinema-Detail"));
  const [isavailable, setIsAvailble] = useState([]);
  const [ticket, setTicket] = useState({
    movieName: Cinema_Details.movieName,
    cinemaName: Cinema_Details.name,
    date: `${new Date().getDate()}/${new Date().getMonth() + 1}`,
    show: Cinema_Details.show[0].time,
    display: false,
    no_tickets: 3,
    selectedTickets: 0,
    ticket_no: [],
  });
  const handleclick = () => {
    sessionStorage.setItem("Total-tickets", JSON.stringify(ticket));
    axios({
      method: "post",
      headers: "application/json",
      url: "http://localhost:5000/ticketdata",
      data: {
        movieName: ticket.movieName,
        cinemaName: ticket.cinemaName,
        date: ticket.date,
        show: ticket.show,
        ticket_no: ticket.ticket_no,
      },
    }).then((res) => {
      if (res.status === 201) {
        alert("Your Ticket is Successfully Booked");
      }
    });
  };
  useEffect(() => {
    axios.get("http://localhost:5000/sendticketdata").then((res) => {
      const ticketshow = res.data
        .filter(
          (elem) =>
            elem.movieName === Cinema_Details.movieName &&
            elem.cinemaName === Cinema_Details.name &&
            elem.show === ticket.show
        )
        .map((items) => items.ticket_no);
      setIsAvailble(ticketshow.flat());
    });
  }, [ticket.show, Cinema_Details.movieName, Cinema_Details.name]);
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
        setIsAvailble={setIsAvailble}
        isavailable={isavailable}
        ticket={ticket}
      />

      <SeatArea
        setTicket={setTicket}
        ticket={ticket}
        isavailable={isavailable}
      />

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
