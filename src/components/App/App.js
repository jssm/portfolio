import React from "react";
import Menu from "../Menu/Menu";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="padding-for-navbar">
        <Menu />
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
