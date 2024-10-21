import React, { useState } from "react";
import "./ScreenTime.css";
import { Link } from "react-router-dom";

export default function ScreenTime({ timing, details, setForBooking }) {
    const [hover, setHover] = useState("none");
    const pricing = timing.location;
    return (
        <div className="time-container">
            <div className="seat-price-hover" style={{ display: hover }}>
                <div>
                    {pricing.map((elem, index) => (
                        <li key={index}>
                            <span className="hover-price">{elem.price}</span>
                            <span className="hover-class">{elem.class}</span>
                            <span className="hover-available">available</span>
                        </li>
                    ))}

                </div>
            </div>
            <li
                className="time-box"
                onClick={() => { setForBooking(details); localStorage.setItem("Cinema-Detail", JSON.stringify(details)) }}
                onMouseEnter={() => setHover("flex")}
                onMouseLeave={() => setHover("none")}
            ><Link to='/moviesdetail/cinemaselection/bookingtickets'>
                    {timing.time}</Link>
            </li>
        </div>
    );
}
