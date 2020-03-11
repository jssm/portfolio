import React from "react"; // Import the Component component from React
import { Link } from "react-router-dom"; // Import the Link component
import "../App/App.css";
import "../Thumbnail/Thumbnail.css";

//This component is simple enough to just have a render() method,
//so it can be a funcional component (simply return the JSX code to render);
//props are passed as parameter

function Thumbnail(props) {
  return (
    <div className="project">
      <div className="project-title">{props.title}</div>
      <div className="project-category">{props.category}</div>
      <div className="project-description">{props.description}</div>
      <div className="project-link">{props.link}</div>
    </div>
  );
}

export default Thumbnail;
