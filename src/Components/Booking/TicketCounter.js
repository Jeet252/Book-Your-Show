import React, { useState } from "react";
import "./TicketCounter.css";
import seat from "./seat";

export default function TicketCounter({ setTicket, ticket, show }) {
  console.log(show);
  const [hover, setHover] = useState({
    clicked: 3,
    hovered: 0,
  });
  return (
    <div
      className="ticket-counter-container"
      style={{ display: ticket.display ? "flex" : "none" }}
    >
      <div>
        <div className="ticket-counter-inner-container">
          <h5 className="ticket-counter-h5">How many seats?</h5>
          <div className="t-c-c-img-collection">
            {Array.from(seat).map((elem) => (
              <img
                className="t-c-c-img"
                key={elem.id}
                src={elem.imgPNG}
                alt={elem.id}
                style={{
                  display:
                    hover.clicked === elem.id || hover.hovered === elem.id
                      ? "flex"
                      : "none",
                  zIndex: hover.hovered === elem.id ? 6 : 5,
                }}
              />
            ))}
          </div>
          <div className="no-of-ticket-area">
            {Array.from(seat).map((elem) => (
              <li
                key={elem.id}
                className="no-of-tickets"
                onClick={() => setHover({ ...hover, clicked: elem.id })}
                onMouseEnter={() => setHover({ ...hover, hovered: elem.id })}
                onMouseLeave={() =>
                  setHover({ ...hover, hovered: hover.clicked })
                }
              >
                {elem.id}
              </li>
            ))}
          </div>
          {/* <hr className="ticket-counter-hr" />
          <li className="t-c-li">
            <span className="t-c-li-class">class</span>
            <span className="t-c-li-price">price</span>
            <span className="t-c-li-available">available</span>
          </li> */}
          <button
            className="t-c-btn"
            onClick={() =>
              setTicket({
                ...ticket,
                display: false,
                no_tickets: hover.clicked,
              })
            }
          >
            {hover.clicked} Tickets
          </button>
        </div>
      </div>
    </div>
  );
}
