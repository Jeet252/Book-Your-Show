import React from "react";
import "./SeatArea.css";
import SeatArrangement from "./SeatArrangement";

export default function SeatArea({ setTicket, ticket }) {
  const details = JSON.parse(localStorage.getItem("Cinema-Detail"));

  return (
    <div className="seatarea-container">
      {details.seat.map((elem, i) => (
        <SeatArrangement
          key={i}
          ticket={ticket}
          setTicket={setTicket}
          details={elem}
          charcode={i < 1 ? 65 : 71}
        />
      ))}
    </div>
  );
}
