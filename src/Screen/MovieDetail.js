import React from "react";
import "./MovieDetail.css";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner/Banner";
import Cast from "../Components/Cast";
import Footer from '../Components/Footer'

export default function MovieDetail() {
    const MovieDetails = JSON.parse(localStorage.getItem("Movie-Detail"))

    return (
        <div>
            <Navbar />
            <Banner MovieDetail={MovieDetails} />
            <div className="more-detail">
                <h2>About Movie</h2>
                <p>
                    {MovieDetails.discription}
                </p>
                <hr />
                <Cast castDetails={MovieDetails.cast} />

            </div>
            <Footer />
        </div>
    );
}
