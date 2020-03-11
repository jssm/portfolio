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
              <Link to="/" className="nav-bar-item">
                About
              </Link>
              <Link to="/curriculum-vitae" className="nav-bar-item">
                Curriculum Vitae
              </Link>
              <Link to="/projects" className="nav-bar-item">
                Projects
              </Link>
            </div>
          </div>
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route path="/curriculum-vitae">
              <CurriculumVitae />
            </Route>
            <Route path="/projects">
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
