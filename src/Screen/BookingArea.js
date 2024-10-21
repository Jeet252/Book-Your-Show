import React, { useState } from "react";
import "./BookingArea.css";
import BookingNavbar from "../Components/Booking/BookingNavbar";
import BookingHeader from "../Components/Booking/BookingHeader";
import TicketCounter from "../Components/Booking/TicketCounter";
// import dataContext from "../Context/dataContext";

export default function BookingArea() {
    // const { forBooking } = useContext(dataContext);
    const Cinema_Details = JSON.parse(localStorage.getItem("Cinema-Detail"))
    const [ticketbtn, setTicketbtn] = useState({
        display: false,
        no_tickets: 3
    })
    return (
        <div>
            <BookingNavbar details={Cinema_Details} setTicketbtn={setTicketbtn} ticketbtn={ticketbtn} />
            <BookingHeader details={Cinema_Details} />
            <div className="booking-bottom">
                <span className="bb-available"></span>Available{" "}
                <span className="bb-selected"></span>Selected
            </div>
            <TicketCounter setTicketbtn={setTicketbtn} ticketbtn={ticketbtn} />
        </div>
    );
}
