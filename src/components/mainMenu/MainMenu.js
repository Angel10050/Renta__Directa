import React from "react";
import "./mainMenu.scss";

import searching from "../../img/searching.svg";
import heartIconToFavorite from "../../img/Mask Group 30.svg";
import astronauntIcon from "../../img/Mask Group 47.svg";
import menuBoxesIcon from "../../img/Mask Group 29.svg";

const MainMenu = () => {
  return (
    <footer className="mainMenuContainer">
      <div className="menu">
        {/* the <a> then will be <Links to="xxx" /> */}
        <a href="#1" className="imageContainer">
          <img className="menuIcon" src={searching} alt="magnifying glasses" />
          <p className="linkText">Buscar</p>
        </a>
        <a href="#1" className="imageContainer">
          <img
            className="menuIcon"
            src={heartIconToFavorite}
            alt="favorite heart"
          />
          <p className="linkText">Favoritos</p>
        </a>
        <a href="#1" className="imageContainer">
          <img className="menuIcon" src={astronauntIcon} alt="astronaut" />
          <p className="linkText">Perfil</p>
        </a>
        <a href="#1" className="imageContainer">
          <img className="menuIcon" src={menuBoxesIcon} alt="LittleBoxes" />
          <p className="linkText">Menú</p>
        </a>
      </div>
    </footer>
  );
};

export default MainMenu;
