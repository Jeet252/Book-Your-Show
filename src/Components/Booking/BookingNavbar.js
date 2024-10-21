import React, { useEffect } from "react";
import "./BookingNavbar.css";
import { IoMdClose } from "react-icons/io";
import { FaPencilAlt } from "react-icons/fa";
export default function BookingNavbar({ setTicketbtn, ticketbtn, details }) {
    useEffect(() => {
        console.log(details)
    })
    return (
        <nav className="booking-navbar">
            <div className="b-nav-title">
                <p className="b-nav-title-moviename">{details.movieName}</p>
                <p className="b-nav-title-cinemaname">{details.cinemaHallName}</p>
            </div>
            <div className="b-nav-btns">
                <div>
                    <button
                        className="b-nav-edit-tickect"
                        onClick={() =>
                            setTicketbtn({
                                ...ticketbtn,
                                display: true,
                            })
                        }
                    >
                        {ticketbtn.no_tickets} Tickets{" "}
                        <FaPencilAlt size={14} style={{ marginLeft: "15px" }} />
                    </button>
                </div>

                <IoMdClose />
            </div>
        </nav>
    );
}
