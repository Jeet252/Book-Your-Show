import React, { useEffect, useState } from "react";
import "./Searchbar.css";
import { SearchNormal1 } from "iconsax-react";
import SearchResult from "./SearchResult";

export default function Searchbar({ searchDetails }) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const details = searchDetails.filter((user) => {
        return user && user.name && user.name.toLowerCase().includes(input);
      });
      input === "" ? setResult([]) : setResult(details);
    }, 300);
    return () => clearTimeout(timer);
  }, [input, searchDetails]);

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <SearchNormal1 size="24" color="black" />
        <input
          type="text"
          placeholder="Search Movie, Cinema"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
      </div>
      <SearchResult result={result} />
    </div>
  );
}
