import React, { Component } from "react";

import "./App.css";
import MainMenu from "./components/mainMenu/MainMenu";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainMenu />
      </div>
    );
  }
}

export default App;
