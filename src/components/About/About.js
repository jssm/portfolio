import React from "react";
import "../App/App.css";
import "./About.css";
import photo_image from "../../images/photo.jpeg";

//This component is simple enough to just have a render() method,
//so it can be a funcional component (simply return the JSX code to render)

function About() {
  return (
    <div className="about-container">
      <img src={photo_image} className="my-photo" alt="JM" />
      <div className="about-text">
        <h2>Hello! My name is Joana</h2>
        <h4>I'm a Software Engineer who loves to get insights out of data.</h4>
      </div>
    </div>
  );
}

export default About;
