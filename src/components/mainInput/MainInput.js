import React from "react";
import "./mainInput.scss";
import magnifying from "./../../img/Mask Group 2.svg";

const MainInput = ({ onChange, id, value }) => {
  return (
    <div className="inputContainer">
      <img className="searchIcon" src={magnifying} alt="magnifying glass" />
      <input
        className="mainInput"
        id={id}
        value={value}
        onChange={onChange}
        type="text"
        placeholder="Buscar"
      />
    </div>
  );
};

export default MainInput;
