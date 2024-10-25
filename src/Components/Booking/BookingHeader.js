import "./BookingHeader.css";

export default function BookingHeader({ details, setTicket, ticket }) {
  return (
    <nav className="booking-header">
      <div className="b-h-ele1">
        {details.show
          .filter((elem) => elem.movieName === details.movieName)
          .map((elem, i) => (
            <li
              key={i}
              className="booking-header-li"
              onClick={() => setTicket({ ...ticket, show: elem.time })}
            >
              {elem.time}
            </li>
          ))}
      </div>

      <hr className="b-h-hr" />
    </nav>
  );
}
