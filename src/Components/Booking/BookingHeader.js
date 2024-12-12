import "./BookingHeader.css";
import { useState } from "react";

export default function BookingHeader({ details, setTicket, ticket }) {
  const [activeIndex, setActiveIndex] = useState("0");

  const handleclick = (e) => {
    if (ticket.show !== e.target.textContent) {
      setActiveIndex((pre) => (pre = e.target.id));
      setTicket({ ...ticket, show: e.target.textContent });
    }
  };
  return (
    <nav className="booking-header">
      <div className="b-h-ele1" onClick={(e) => handleclick(e)}>
        {details.show
          .filter((elem) => elem.movieName === details.movieName)
          .map((elem, i) => (
            <li
              key={i}
              id={i}
              className="booking-header-li"
              style={{
                color: activeIndex === i.toString() ? "white" : "green",
                backgroundColor:
                  activeIndex === i.toString() ? "green" : "white",
              }}
            >
              {elem.time}
            </li>
          ))}
      </div>

      <hr className="b-h-hr" />
    </nav>
  );
}
