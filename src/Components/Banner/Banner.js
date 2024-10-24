import React from "react";
import "./Banner.css";
import Card2 from "./Card2";
import { Link } from "react-router-dom";

export default function Banner({ MovieDetail }) {
  return (
    <div
      className="banner-container"
      style={{
        backgroundImage: `linear-gradient(90deg, #1A1A1A 24.97%, #1A1A1A 38.3%, rgba(26, 26, 26, 0.0409746) 97.47%, #1A1A1A 100%),url(${MovieDetail.bgImageUrl})`,
      }}
    >
      <div className="banner-content">
        <Card2 url={MovieDetail.imageUrl} />
        <div className="bannercard-detail">
          <h1 className="banner-movie-name">{MovieDetail.name}</h1>
          <span className="banner-movie-rating">{MovieDetail.rating}</span>
          <span className="banner-card-movie-language">2D, Hindi</span>
          <ul className="banner-card-detail-unorderedlist">
            Duration
            <li>
              • {MovieDetail.genre[0]} {MovieDetail.genre[1]}
            </li>
            <li>• Certificate</li>
          </ul>
          <button className="banner-btn">
            <Link to="/cinemaselection">Book tickets</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
