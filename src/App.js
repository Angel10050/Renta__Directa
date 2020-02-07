import React, { Component } from "react";

import "./App.css";
import PropietyType from "./Components/propertytype/PropietyType";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PropietyType />
        <PropietyType />
        <PropietyType />
        <PropietyType />
        <PropietyType />
      </div>
    );
  }
}

export default App;
