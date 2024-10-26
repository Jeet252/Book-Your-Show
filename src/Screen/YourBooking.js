import { GrFormPrevious } from "react-icons/gr";
import "./YourBooking.css";
import { Link } from "react-router-dom";

export default function YourBooking() {
  const tickets = JSON.parse(sessionStorage.getItem("Total-tickets"));
  return (
    <div className="your-booking-container">
      <header className="your-booking-header">
        <Link to="/Book-Your-Show">
          <GrFormPrevious size={26} />
        </Link>

        <h3>Your Booking</h3>
      </header>
      <div className="ticket-list">
        <div className="your-booking-ticket-container">
          <li className="your-booking-cinemaname">{tickets.cinemaName}</li>
          <li className="your-booking-moviename">{tickets.movieName}</li>
          <hr />
          <div>
            <li>{tickets.ticket_no[0].class}</li>
            <li>{tickets.ticket_no[0].seat_no}</li>
            <li>{tickets.date}</li>
            <li>{tickets.show}</li>
          </div>
        </div>
      </div>
    </div>
  );
}
