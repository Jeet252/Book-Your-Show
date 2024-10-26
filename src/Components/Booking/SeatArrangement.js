import "./SeatArrangement.css";

export default function SeatArrangement({
  details,
  charcode,
  setTicket,
  ticket,
}) {
  const handleSelected = (e, a, b, c) => {
    if (
      ticket.no_tickets > ticket.selectedTickets &&
      e.target.style.backgroundColor !== "green"
    ) {
      const ticketNumber = {
        class: b,
        seat_no: String.fromCharCode(charcode + a) + c,
      };
      e.target.style.color = "white";
      e.target.style.backgroundColor = "green";
      setTicket({
        ...ticket,
        selectedTickets: ticket.selectedTickets + 1,
        ticket_no: [...ticket.ticket_no, ticketNumber],
      });
    } else if (
      ticket.no_tickets >= ticket.selectedTickets &&
      e.target.style.backgroundColor === "green"
    ) {
      const ticketNumber = {
        class: b,
        seat_no: String.fromCharCode(charcode + a) + c,
      };
      e.target.style.color = "black";
      e.target.style.backgroundColor = "white";
      setTicket({
        ...ticket,
        selectedTickets: ticket.selectedTickets - 1,
      });
      ticket.ticket_no.pop(ticketNumber);
    }
  };
  return (
    <div className="seating-arrangement-container">
      <h5 className="seatarea-price">
        Rs. {details.price} {details.class.toUpperCase()}
      </h5>
      <hr className="seatarea-hr" />
      <div className="seat-arrangement">
        {details.seat_arrangement.map((elem, i) => (
          <div key={i} className="total-seats">
            <li className="seat-colum-name">
              {String.fromCharCode(charcode + i)}
            </li>
            <div className="seat-colum">
              {elem.map((items) => (
                <button
                  className="seat-btn"
                  key={items}
                  onClick={(e) => handleSelected(e, i, details.class, items)}
                >
                  {items}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
