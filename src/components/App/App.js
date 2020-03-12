import React from "react";
// Import components
import CurriculumVitae from "../CurriculumVitae/CurriculumVitae";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Footer from "../Footer/Footer";
// Import css
import "./App.css";
// Import nav bar image
import logo_image from "../../images/white_logo.png";
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="nav-bar">
            <img src={logo_image} className="logo" alt="Logo JM" />
            <div className="nav-bar-items">
              {/* Set up the Links */}
              <Link to="/portfolio" className="nav-bar-item">
                About
              </Link>
              <Link to="/portfolio/curriculum-vitae" className="nav-bar-item">
                Curriculum Vitae
              </Link>
              <Link to="/portfolio/projects" className="nav-bar-item">
                Projects
              </Link>
            </div>
          </div>
          <Switch>
            <Route exact path="/portfolio">
              <About />
            </Route>
            <Route path="/portfolio/curriculum-vitae">
              <CurriculumVitae />
            </Route>
            <Route path="/portfolio/projects">
              <Projects />
            </Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
