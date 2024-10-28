import "./Card.css";
import { Star1 } from "iconsax-react";
import { Link } from "react-router-dom";

export default function Card({ name }) {
  const handleClick = () => {
    sessionStorage.setItem("Movie-Detail", JSON.stringify(name));
  };

  return (
    <div className="card-container">
      <div className="card-img">
        <Link to="/moviedetail">
          <img
            onClick={handleClick}
            className="card-movie-img"
            src={name.imageUrl}
            loading="lazy"
            alt=""
          />
        </Link>
      </div>
      <span className="card-movie-rating">
        <Star1 size="24" color="#FF8A65" />
        {name.rating}
      </span>
      <h4 className="card-movie-name">{name.name}</h4>
      <div>
        {name.genre.map((elem, i) => (
          <span key={i} className="card-genre">
            {elem}
          </span>
        ))}
      </div>
    </div>
  );
}
