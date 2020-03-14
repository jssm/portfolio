import React from "react"; // Import the Component component from React
import "../App/App.css";
import "../Thumbnail/Thumbnail.css";

//This component is simple enough to just have a render() method,
//so it can be a funcional component (simply return the JSX code to render);
//props are passed as parameter

function Thumbnail(props) {
  return (
    <div className="project">
      <h6 className="project-title">{props.title}</h6>
      <div className="project-category">{props.category}</div>
      <div className="project-description">{props.description}</div>
      <div className="project-technologies">
        Used technologies: {props.technologies.join(", ")}
      </div>
      <div className="project-link">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          Link to project
        </a>
      </div>
    </div>
  );
}

Thumbnail.defaultProps = {
  technologies: ["None"]
};

export default Thumbnail;
