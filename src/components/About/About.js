import React from "react";
import "../App/App.css";
import "./About.css";
import photo_image from "../../images/photo.jpeg";

//This component is simple enough to just have a render() method,
//so it can be a funcional component (simply return the JSX code to render)

function Header() {
  return (
    <div className="header-container">
      <img src={photo_image} className="my-photo" alt="JM" />
      <div className="header-text">
        <h2 className="header-grid-hello">Hello! My name is Joana</h2>
        <h4 className="header-grid-description">
          I'm a Software Engineer who loves to get insights out of data.
        </h4>
      </div>
    </div>
  );
}

export default Header;
