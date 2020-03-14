import React from "react";
// Import components
import Experience from "../Experience/Experience";
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
              <Link to="/portfolio/experience" className="nav-bar-item">
                Experience
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
            <Route path="/portfolio/experience">
              <Experience />
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
