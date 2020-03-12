import React from "react";
import "../App/App.css";
import Thumbnail from "../Thumbnail/Thumbnail";

//This component is simple enough to just have a render() method,
//so it can be a funcional component (simply return the JSX code to render)

function Projects() {
  return (
    // Render a Thumbnail component
    <div className="thumbnail-rail">
      <h5>Projects</h5>
      <Thumbnail title="Test Project" category="" description="" link="" />
    </div>
  );
}

export default Projects;
