import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import logo from "../images/CCC-Logo.png";
import Home from "./Home";
import ClubJoin from "./ClubJoin";
import "./Nav.css";

const Nav = ({ handleChange, handleSubmit, userForm }) => {
  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-container">
          <img className="logo" src={logo} alt="logo" />
          <h1 className="nav-title">Movie Magic</h1>
          <ul className="nav-menu">
            <li className="nav-options">
              <Link className="nav-links" to="/">
                Home
              </Link>
            </li>
            <li className="nav-options">
              <Link className="nav-links" to="/ClubJoin">
                Club Join
              </Link>
            </li>
          </ul>
          <div className="search-box">
            <input className="search" />
            <button className="search-btn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/ClubJoin"
          element={
            <ClubJoin
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              userForm={userForm}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default Nav;
