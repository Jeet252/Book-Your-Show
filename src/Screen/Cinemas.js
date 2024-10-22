import React, { useContext } from "react";
import "./Cinemas.css";
import Navbar from "../Components/Navbar";
import CinemaName from "../Components/CinemaInfo/CinemaName";
import dataContext from "../Context/dataContext";
import cinemaDetails from '../Data/cinemaDetails'

export default function Cinemas() {
    const { setForBooking } = useContext(dataContext);
    const movie = JSON.parse(localStorage.getItem("Movie-Detail"));
    const cinema = cinemaDetails.filter((elem) => JSON.stringify(elem.show).includes(movie.movieName));

    return (
        <div>
            <Navbar />
            <div className="cinema-header">
                <h1 className="cinema-section-movieName">{movie.movieName}</h1>
                <span className="cinema-section-certificate">UA</span>
                <span className="cinema-section-genre">Genre</span>
                <span className="cinema-section-genre">Genre</span>
                <span className="cinema-section-genre">Genre</span>
            </div>
            {cinema.map((elem, index) => (
                <CinemaName key={index} cinemaDetails={elem} movieName={movie.movieName} setForBooking={setForBooking} />
            ))}

        </div>
    );
}
