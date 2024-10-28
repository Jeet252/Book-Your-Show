import "./Navbar.css";
import Searchbar from "./SearchComponent/Searchbar";
import { TiTicket } from "react-icons/ti";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assests/file.png";

export default function Navbar() {
  const data = JSON.parse(sessionStorage.getItem("Total-tickets"));

  return (
    <nav className="navbar">
      <ul className="navbar-logo">
        <img src={logo} alt="" />
      </ul>
      <Searchbar />
      <ul className="navbar-ul-element">
        <Link to={"/Book-Your-Show"} className="navbar-home">
          <FaHome />
          Home
        </Link>
        <Link to={""} className="navbar-yourbooking">
          <TiTicket />
          Your Booking
          <li className="navbar-yourbooking-no">
            {data === null ? 0 : data.ticket_no.length}
          </li>
        </Link>
      </ul>
    </nav>
  );
}
