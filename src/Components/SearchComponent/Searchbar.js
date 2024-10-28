import React, { useEffect, useState } from "react";
import "./Searchbar.css";
import { SearchNormal1 } from "iconsax-react";
import SearchResult from "./SearchResult";
import axios from "axios";

export default function Searchbar() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  useEffect(() => {
    const fetch_data = async () => {
      const res1 = await axios.get("http://localhost:5000/movie");
      const res2 = await axios.get("http://localhost:5000/cinema");
      let res = [...res1.data, ...res2.data];
      const details = res.filter((user) => {
        return user && user.name && user.name.toLowerCase().includes(input);
      });
      input === "" ? setResult([]) : setResult(details);
    };
    const timer = setTimeout(() => {
      fetch_data();
    }, 300);
    return () => clearTimeout(timer);
  }, [input]);

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
