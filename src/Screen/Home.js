import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "../Components/Navbar";
import Crousal from "../Components/Crousal";
import Card from "../Components/Card";
import { ArrowRight2, ArrowLeft2 } from "iconsax-react";
import Footer from "../Components/Footer";
import axios from "axios";
import SimmerCrousal from "../Components/Simmer/SimmerCrousal";
import SimmerHeader from "../Components/Simmer/SimmerHeader";
import SimmerSlider from "../Components/Simmer/SimmerSlider";

export default function Home() {
  const [moviesDetails, setMoviesDetails] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [translate, setTranslate] = useState({
    time: 0,
    transition: 0,
  });
  const handleLeftClick = () => {
    if (translate.time > 0) {
      setTranslate({
        ...translate,
        time: translate.time - 1,
        transition: translate.transition + 33.32,
      });
    }
  };

  const handleRightClick = () => {
    if (translate.time < 2) {
      setTranslate({
        ...translate,
        time: translate.time + 1,
        transition: translate.transition - 33.32,
      });
    }
  };
  useEffect(() => {
    (async () => {
      try {
        const responce = await axios.get("http://localhost:5000/movie");
        setMoviesDetails(responce.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <Navbar />

      {isloading ? (
        <SimmerCrousal />
      ) : (
        <Crousal moviesDetails={moviesDetails} />
      )}
      <section className="items-container">
        {isloading ? (
          <SimmerHeader />
        ) : (
          <h2 className="home-text">Recomended Movies</h2>
        )}
        <button
          style={{ display: translate.time === 0 ? "none" : "inline-flex" }}
          className="movies-container-left-btn"
          onClick={handleLeftClick}
        >
          <ArrowLeft2 size="32" color="black" />
        </button>
        <div className="movie-container">
          {isloading ? (
            <SimmerSlider />
          ) : (
            <div
              className="cards-container"
              style={{ translate: translate.transition + "%" }}
            >
              {moviesDetails.map((elem, i) => (
                <Card key={i} name={elem} />
              ))}
            </div>
          )}
        </div>
        <button
          style={{ display: translate.time === 2 ? "none" : "inline-flex" }}
          className="movies-container-right-btn"
          onClick={handleRightClick}
        >
          <ArrowRight2 size="32" color="black" />
        </button>
      </section>
      <Footer />
    </div>
  );
}
