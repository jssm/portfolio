import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; //needed for bootstrap
import Navbar from "react-bootstrap/Navbar";
import logo_image from "../../images/white_logo.png";

function Menu() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">
          <img
            src={logo_image}
            width="50"
            height="30"
            className="d-inline-block align-top"
            alt="Joana Matos JM logo"
          />
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default Menu;
