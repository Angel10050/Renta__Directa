import React, { Component } from "react";

import "./App.css";
import MainInput from "./components/mainInput/MainInput";

import MainMenu from "./components/mainMenu/MainMenu";
import PropietyType from "./components/propertytype/PropietyType";

/* Esto cambiaria segun el componete en que se vaya a importar*/
import house from "./img/Mask Group 4.svg";
import apartment from "./img/Mask Group 21.svg";
import local from "./img/Mask Group 36.svg";
import office from "./img/Mask Group 35.svg";
import categories from "./img/Mask Group 41.svg";
/* Esto cambiaria segun el componete en que se vaya a importar*/

import SmallCard from "./components/smallCard/SmallCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="mainContainerInput">
          <MainInput />
        </div>

        <MainMenu />
        <div className="categoryContainer">
          <PropietyType image={house} propiety="Casa" />
          <PropietyType image={apartment} propiety="Apartamento" />
          <PropietyType image={local} propiety="LocalComercial" />
          <PropietyType image={office} propiety="Oficina" />
          <PropietyType image={categories} propiety="Categorias" />
        </div>
        <SmallCard />
      </div>
    );
  }
}

export default App;
