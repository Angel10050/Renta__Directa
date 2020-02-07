import React from "react";

import "./propietyType.css";
import Bilding from "./../../img/building.svg";

const PropietyType = () => {
  return (
    <div className="propiety_type_container">
      <div className="base">
        <span className="image_container">
          <img src={Bilding} alt="propiety_type" className="propiety_image" />
        </span>
      </div>
      <p className="type_propiety_text">xxxxxx</p>
    </div>
  );
};

export default PropietyType;
