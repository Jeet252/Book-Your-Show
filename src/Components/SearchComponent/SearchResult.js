import "./SearchResult.css";
import { Link } from "react-router-dom";

export default function SearchResult({ result }) {
  const handleNavigate = (items) => {
    if (items.type === "/moviedetails") {
      localStorage.setItem("Movie-Detail", JSON.stringify(items));
    } else if (items.type === "/thaterinfo") {
      localStorage.setItem("Thater-info", JSON.stringify(items));
    }
  };
  return (
    <div className="search-result">
      {result.map((items, index) => (
        <Link to={items.type} key={index} onClick={() => handleNavigate(items)}>
          {items.name}
        </Link>
      ))}
    </div>
  );
}
