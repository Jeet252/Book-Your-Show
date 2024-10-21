import React, { useState } from "react";
import "./Searchbar.css";
import { SearchNormal1 } from "iconsax-react";
import SearchResult from "./SearchResult";
export default function Searchbar() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState([])

    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                const result = data.filter((user) => {
                    return user && user.name && user.name.toLowerCase().includes(value)
                })
                setResult(result)
            });
    };
    const handleChange = (value) => {
        if (value === '') {
            setResult([])
            setInput(value)

        } else {
            setInput(value)
            fetchData(value)
        }
    }
    return (
        <div className="search-bar-container">
            <div className="search-bar">
                <SearchNormal1 size="24" color="black" />
                <input
                    type="text"
                    placeholder="search here"
                    onChange={(e) => handleChange(e.target.value)}
                    value={input}
                />
            </div>
            <SearchResult result={result} />
        </div>
    );
}
