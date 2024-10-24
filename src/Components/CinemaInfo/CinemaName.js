import React from "react";
import "./CinemaName.css";
import ScreenTime from "./ScreenTime";
import { FaMobileAlt } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";

export default function CinemaName({
  cinemaDetails,
  movieName,
  setForBooking,
}) {
  const timing = cinemaDetails.show.filter(
    (elem) => elem.movieName === movieName
  );
  const details = {
    ...cinemaDetails,
    movieName: movieName,
  };
  return (
    <div className="cinema-info-container">
      <div className="cinema-basic-inf0">
        <h4 className="header-cinema-name">{cinemaDetails.name}</h4>
        <span className="m-ticket">
          <FaMobileAlt />
          M-ticket
        </span>
        <span
          className="food-beverages"
          style={{ display: cinemaDetails.food_baverages ? "initial" : "none" }}
        >
          <IoFastFoodOutline />
          Food & beverages
        </span>
      </div>
      {timing.map((elem, index) => (
        <ScreenTime
          key={index}
          timing={elem}
          details={details}
          setForBooking={setForBooking}
        />
      ))}
    </div>
  );
}
