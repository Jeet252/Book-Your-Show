import React from "react";
import "./Navbar.css";
import Searchbar from "./SearchComponent/Searchbar";
import cinemaDetails from "../Data/cinemaDetails";
import moviedetails from "../Data/moviesDetails";
import { TiTicket } from "react-icons/ti";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assests/file.png";

export default function Navbar() {
  const search_details = [...cinemaDetails, ...moviedetails];
  return (
    <nav className="navbar">
      <ul className="navbar-logo">
        <img src={logo} alt="" />
      </ul>
      <Searchbar searchDetails={search_details} />
      <ul className="navbar-ul-element">
        <Link to={"/Book-Your-Show"} className="navbar-home">
          <FaHome />
          Home
        </Link>
        <Link to={""} className="navbar-yourbooking">
          <TiTicket />
          Your Booking
          <li className="navbar-yourbooking-no">0</li>
        </Link>
      </ul>
    </nav>
  );
}
