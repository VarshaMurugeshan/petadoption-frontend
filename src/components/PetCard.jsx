import React from "react";
import "./../styles/app.css";

const PetCard = ({ name, imageUrl, description }) => {
  return (
    <div className="pet-card">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default PetCard;
