import "./Thaters.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import data from "../Data/moviesDetails";
import { FaMobileAlt } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Thaters() {
  const thaterDetails = JSON.parse(sessionStorage.getItem("Thater-info"));

  const handleclick = (a) => {
    const cinemaDetails = { ...thaterDetails, movieName: a };
    sessionStorage.setItem("Cinema-Detail", JSON.stringify(cinemaDetails));
  };
  return (
    <div className="thaters-container">
      <Navbar />
      <header className="thaters-header">
        <h2>{thaterDetails.name}</h2>
        <span className="thater-mticket">
          <FaMobileAlt />
          M-Ticket
        </span>
        <span
          className="thater-foodbaverages"
          style={{
            display: thaterDetails.food_baverages ? "inline-flex" : "none",
          }}
        >
          <IoFastFoodOutline />
          Food&Baverages
        </span>
      </header>
      <div className="thater-movies-list">
        {thaterDetails.show.map((elem, i) => (
          <div className="movies-list-movie" key={i}>
            {data
              .filter((details) => details.name === elem.movieName)
              .map((details, index) => (
                <div key={index}>
                  <img
                    className="movie-list-movieimg"
                    src={details.imageUrl}
                    alt=""
                  />

                  <ul className="movies-list-moviename">
                    <Link
                      to={"/bookingtickets"}
                      onClick={() => handleclick(details.name)}
                      className="movies-list-moviename-name"
                    >
                      {details.name}
                    </Link>
                    <li className="movies-list-moviename-genre">
                      <span>{details.genre[0]}</span>
                      <span>{details.genre[1]}</span>
                    </li>
                  </ul>
                  <Link
                    to={"/bookingtickets"}
                    className="movies-list-movietime"
                    onClick={() => handleclick(details.name)}
                  >
                    {elem.time}
                  </Link>
                </div>
              ))}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
