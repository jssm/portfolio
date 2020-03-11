import React from "react";
import "../App/App.css";
import "./About.css";
import photo_image from "../../images/photo.jpeg";

//This component is simple enough to just have a render() method,
//so it can be a funcional component (simply return the JSX code to render)

function Header() {
  return (
    <div className="header-grid-container">
      <img
        src={photo_image}
        width="100%"
        className="header-grid-photo rounded-corners"
        alt="JM"
      />
      <h2 className="header-grid-hello header-text">Hello! My name is Joana</h2>
      <h4 className="header-grid-description header-text">
        I'm a Software Engineer who loves to get insights out of data.
      </h4>
    </div>
  );
}

export default Header;
