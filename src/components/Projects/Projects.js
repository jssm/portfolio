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
      <Thumbnail
        title="Portfolio Site"
        category="Personal Projects"
        description="Elaboration of this very site, created in order to document my academic and professional experience, as well as any personal projects. The code is available on GitHub, through the link found below."
        technologies={["JavaScript", "ReactJS"]}
        link="https://github.com/jssm/portfolio"
      />
    </div>
  );
}

export default Projects;
