import React, { Component } from "react";

import "./App.css";
import PropietyType from "./components/propertytype/PropietyType";

/* Esto cambiaria segun el componete en que se vaya a importar*/
import house from "./img/Mask Group 4.svg";
import apartment from "./img/Mask Group 21.svg";
import local from "./img/Mask Group 36.svg";
import office from "./img/Mask Group 35.svg";
import categories from "./img/Mask Group 41.svg";
/* Esto cambiaria segun el componete en que se vaya a importar*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <PropietyType image={house} propiety="Casa" />
        <PropietyType image={apartment} propiety="Apartamento" />
        <PropietyType image={local} propiety="LocalComercial" />
        <PropietyType image={office} propiety="Oficina" />
        <PropietyType image={categories} propiety="Categorias" />
      </div>
    );
  }
}

export default App;
