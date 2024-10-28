import React, { useState } from "react";
import "./ScreenTime.css";
import { Link } from "react-router-dom";

export default function ScreenTime({ timing, details }) {
  const [hover, setHover] = useState("none");
  return (
    <div className="time-container">
      <div className="seat-price-hover" style={{ display: hover }}>
        <div>
          {details.seat.map((elem, index) => (
            <li key={index}>
              <span className="hover-price">{elem.price}</span>
              <span className="hover-class">{elem.class}</span>
              <span className="hover-available">available</span>
            </li>
          ))}
        </div>
      </div>
      <Link
        to="/bookingtickets"
        className="time-box"
        onClick={() => {
          sessionStorage.setItem("Cinema-Detail", JSON.stringify(details));
        }}
        onMouseEnter={() => setHover("flex")}
        onMouseLeave={() => setHover("none")}
      >
        {timing.time}
      </Link>
    </div>
  );
}
