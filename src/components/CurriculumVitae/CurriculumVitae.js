import React from "react";
import "../App/App.css";
import Thumbnail from "../Thumbnail/Thumbnail";

//This component is simple enough to just have a render() method,
//so it can be a funcional component (simply return the JSX code to render)

function CurriculumVitae() {
  return (
    // Render a Thumbnail component
    <div className="thumbnail-rail">
      <h5>Academic Experience</h5>
      <Thumbnail
        title="Test Experience"
        category="cat 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        technologies={["Java", "Python"]}
        link="https://www.linkedin.com/in/joana-sofia-matos/"
      />
      <Thumbnail
        title="Test Experience 2"
        category="cat 2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        technologies={["KNIME", "Python", "Scikit-learn"]}
        link="test link"
      />
    </div>
  );
}

export default CurriculumVitae;
