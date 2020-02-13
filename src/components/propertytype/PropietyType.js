import React from "react";

import "./propietyType.scss";

const PropietyType = ({ image, propiety }) => {
  return (
    <div className="propiety_type_container">
      <div className="base">
        <span className="image_container">
          <img src={image} alt="propiety_type" className="propiety_image" />
        </span>
      </div>
      <p className="type_propiety_text">{propiety}</p>
    </div>
  );
};

export default PropietyType;
