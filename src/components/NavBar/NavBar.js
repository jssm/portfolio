import React from "react";
import logo_image from "../../images/white_logo.png";
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from "react-router-dom";
// Import css files
import "../App/App.css";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav-bar">
      <img src={logo_image} className="logo" alt="Logo JM" />
      <div className="nav-bar-items">
        <a href="" className="nav-bar-item">
          About
        </a>
        <a href="" className="nav-bar-item">
          Curriculum Vitae
        </a>
        <a href="" className="nav-bar-item">
          Projects
        </a>
      </div>
    </div>
  );
}

export default NavBar;
