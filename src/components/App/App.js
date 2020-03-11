import React from "react";
import NavBar from "../NavBar/NavBar";
import About from "../About/About";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
        <About />
        {/* <Body /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
