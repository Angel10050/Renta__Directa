import React from "react";
import "./smallCard.scss";

import favorite from "./../../img/Mask Group 23.svg";

const SmallCard = () => {
  const temporalData = [
    {
      img: "https://i.ibb.co/DDYnFBs/naomi-hebert-MP0bga-S-d1c-unsplash.png",
      propietyType: "casa",
      price: 999999,
      address: "Las Palmas",
      stratum: "#",
      location: "Patagonia"
    },
    {
      img: "https://i.ibb.co/DDYnFBs/naomi-hebert-MP0bga-S-d1c-unsplash.png",
      propietyType: "casa",
      price: 999999,
      address: "Las Palmas",
      stratum: "#",
      location: "Patagonia"
    },
    {
      img: "https://i.ibb.co/DDYnFBs/naomi-hebert-MP0bga-S-d1c-unsplash.png",
      propietyType: "casa",
      price: 999999,
      address: "Las Palmas",
      stratum: "#",
      location: "Patagonia"
    },
    {
      img: "https://i.ibb.co/DDYnFBs/naomi-hebert-MP0bga-S-d1c-unsplash.png",
      propietyType: "casa",
      price: 999999,
      address: "Las Palmas",
      stratum: "#",
      location: "Patagonia"
    },
    {
      img: "https://i.ibb.co/DDYnFBs/naomi-hebert-MP0bga-S-d1c-unsplash.png",
      propietyType: "casa",
      price: 999999,
      address: "Las Palmas",
      stratum: "#",
      location: "Patagonia"
    }
  ];
  return (
    <div className="smallCardsContainer">
      {temporalData.map(propiety => {
        return (
          <section className="smallCard">
            <div className="imageContainer">
              <span className="AddToFavorite">
                <img
                  src={favorite}
                  alt="favorite heart icon"
                  className="favoriteIcon"
                />
              </span>
              <img
                src={propiety.img}
                alt={propiety.propietyType}
                className="propietyImage"
              />
            </div>

            <div className="mainInformation">
              <div className="priceAndPropietyContainer">
                <p className="propietyType">{propiety.propietyType}</p>
                <p className="propietyPrice">{propiety.price}</p>
              </div>

              <p className="propietyAddress">{propiety.address}</p>
              <p className="propietyStratum">Estrato {propiety.stratum}</p>
              <p className="propietyLocation">{propiety.location}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default SmallCard;
