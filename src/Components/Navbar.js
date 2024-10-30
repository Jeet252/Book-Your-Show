import "./Navbar.css";
import Searchbar from "./SearchComponent/Searchbar";
import { TiTicket } from "react-icons/ti";
import { FaHome, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assests/file.png";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import axios from "axios";

export default function Navbar() {
  const data = JSON.parse(sessionStorage.getItem("Total-tickets"));
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    phone_no: "",
  });
  const [isSign, setSignup] = useState(false);
  const [isLogin, setLogin] = useState(false);

  const handlechange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleLogin = () => {
    axios({
      method: "post",
      headers: "application/json",
      url: "http://localhost:5000/login",
      data: {
        email: values.email,
        password: values.password,
      },
    }).then((res) => {
      if (res.status === 201) {
        alert("You are logged in");
        setLogin(false);
      }
    });
  };
  const handleSignup = () => {
    axios({
      method: "post",
      headers: "application/json",
      url: "http://localhost:5000/signup",
      data: {
        username: values.username,
        email: values.email,
        password: values.password,
        phone_no: values.phone_no,
      },
    }).then((res) => {
      if (res.status === 201) {
        alert("You are sign in");
        setSignup(false);
      }
    });
  };
  return (
    <nav className="navbar">
      <ul className="navbar-logo">
        <img src={logo} alt="" />
      </ul>
      <Searchbar />
      <ul className="navbar-ul-element">
        <Link to={"/Book-Your-Show"} className="navbar-home">
          <FaHome />
          Home
        </Link>
        <li onClick={() => setSignup(true)}>
          <FaUserPlus />
          Sign up
        </li>
        <Link to={""} className="navbar-yourbooking">
          <TiTicket />
          Your Booking
          <li className="navbar-yourbooking-no">
            {data === null ? 0 : data.ticket_no.length}
          </li>
        </Link>
      </ul>
      <div className="signup" style={{ display: isSign ? "flex" : "none" }}>
        <div className="signup-container">
          <h5>Get Started</h5>
          <li className="signup-close" onClick={() => setSignup(false)}>
            <IoIosClose size={32} />
          </li>
          <input
            type="text"
            onChange={(e) => handlechange(e)}
            name="username"
            placeholder="Username"
            value={values.username}
          />
          <input
            type="text"
            onChange={(e) => handlechange(e)}
            name="email"
            placeholder="Email"
            value={values.email}
          />
          <input
            type="text"
            onChange={(e) => handlechange(e)}
            name="password"
            placeholder="Password"
            value={values.password}
          />
          <input
            type="text"
            onChange={(e) => handlechange(e)}
            name="phone_no"
            placeholder="Phone No"
            value={values.phone_no}
          />
          <hr />
          <li className="signup-container-text">
            I agree to <Link>Terms & Condition</Link> &
            <Link> Privacy Policy</Link>
          </li>
          <button className="signup-btn" onClick={handleSignup}>
            Sign Up
          </button>
          <span>
            Already have account?{" "}
            <span
              onClick={() => {
                setLogin(true);
                setSignup(false);
                setValues({
                  username: "",
                  email: "",
                  password: "",
                  phone_no: "",
                });
              }}
            >
              Login here
            </span>
          </span>
        </div>
      </div>
      <div className="login" style={{ display: isLogin ? "flex" : "none" }}>
        <div className="login-container">
          <h5>Get Started</h5>
          <li className="login-close" onClick={() => setLogin(false)}>
            <IoIosClose size={32} />
          </li>
          <input
            type="text"
            onChange={(e) => handlechange(e)}
            name="email"
            placeholder="Email"
            value={values.email}
          />
          <input
            type="text"
            onChange={(e) => handlechange(e)}
            name="password"
            placeholder="Password"
            value={values.password}
          />
          <hr />
          <li className="login-container-text">
            I agree to <Link>Terms & Condition</Link> &
            <Link> Privacy Policy</Link>
          </li>
          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>
          <span>
            Not have account?{" "}
            <span
              onClick={() => {
                setLogin(false);
                setSignup(true);
                setValues({
                  email: "",
                  password: "",
                });
              }}
            >
              Signup here
            </span>
          </span>
        </div>
      </div>
    </nav>
  );
}
