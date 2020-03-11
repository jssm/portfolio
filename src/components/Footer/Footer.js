import React from "react";
import "../App/App.css";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

//This component is simple enough to just have a render() method,
//so it can be a funcional component (simply return the JSX code to render)

function Footer() {
  return (
    <div className="footer-bar">
      <div className="icons-list">
        <a
          className="social-media-app"
          href="https://www.linkedin.com/in/joana-sofia-matos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          className="social-media-app"
          href="https://github.com/jssm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
