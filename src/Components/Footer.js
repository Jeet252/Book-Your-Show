import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="f-sub-container">
                <hr className="footer-hr" />
                <div className="footer-icons-div">
                    <Link className="footer-icon">
                        <FaGithub size={26} />
                    </Link>
                    <Link className="footer-icon" to={"https://www.instagram.com/jeet_nakrani_02/"}>
                        <FaInstagram size={26} />
                    </Link>
                    <Link className="footer-icon">
                        <SiGmail size={26} to={"jeetnakrani2002@gmail.com"} />
                    </Link>
                </div>
                <p className="footer-text" style={{ fill: "linear-gradient(red, blue)" }}>Copyright © 2024, Jeet Nakrani,Inc</p>
            </div>
        </footer>
    );
}
