import React, { useEffect, useState } from "react";
import "./Crousal.css";
import profile from '../Data/profile'
import { ArrowRight2, ArrowLeft2 } from "iconsax-react"

export default function Crousal() {
    const [display, setDisplay] = useState(0);
    useEffect(() => {
        const imageChange = setTimeout(() => {
            display === profile.length - 1 ? setDisplay(0) : setDisplay(display + 1);
        }, 2000);
        return () => clearTimeout(imageChange);
    })
    const handleLeft = () => {
        display === 0 ? setDisplay(profile.length - 1) : setDisplay(display - 1);
    };
    const handleRight = () => {
        display === profile.length - 1 ? setDisplay(0) : setDisplay(display + 1);
    };
    return (
        <div className="crousal-container">
            <div className=" c-c-inner"></div>
            <button className="crousal-left-btn" onClick={handleLeft}>
                <ArrowLeft2 size="32" color="white" />
            </button>
            {profile.map((elem, index) => (
                <img
                    className="crousal-img"
                    key={index}
                    src={elem.bgImageUrl}
                    alt=""
                    style={{ display: display === index ? "block" : "none" }}
                />
            ))}
            <button className="crousal-right-btn" onClick={handleRight}>
                <ArrowRight2 size="32" color="white" />
            </button>


        </div>
    );
}
