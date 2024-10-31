import React, { useEffect, useState } from "react";
import "./Cinemas.css";
import Navbar from "../Components/Navbar";
import CinemaName from "../Components/CinemaInfo/CinemaName";
import axios from "axios";
// import cinemaDetails from "../Data/cinemaDetails";

export default function Cinemas() {
  const [cinemaDetails, setCinemaDetails] = useState([]);
  const movie = JSON.parse(sessionStorage.getItem("Movie-Detail"));
  useEffect(() => {
    (async () => {
      try {
        const responce = await axios.get("http://localhost:5000/cinema");
        setCinemaDetails(
          responce.data.filter((elem) =>
            JSON.stringify(elem.show).includes(movie.name)
          )
        );
        console.log("object");
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movie.name]);

  return (
    <div>
      <Navbar />
      <div className="cinema-header">
        <h1 className="cinema-section-movieName">{movie.name}</h1>
        <span className="cinema-section-certificate">UA</span>
        <span className="cinema-section-genre">Genre</span>
        <span className="cinema-section-genre">Genre</span>
        <span className="cinema-section-genre">Genre</span>
      </div>
      {cinemaDetails.map((elem, index) => (
        <CinemaName key={index} cinemaDetails={elem} movieName={movie.name} />
      ))}
    </div>
  );
}
