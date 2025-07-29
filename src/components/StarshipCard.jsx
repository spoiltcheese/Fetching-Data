import React from "react";

const StarshipCard = (props) => {
  return (
    <div>
      <h4>{props.starship.name}</h4>
      <p>Class: {props.starship.starship_class}</p>
      <p>Manufacturer: {props.starship.manufacturer}</p>
      <p>Model: {props.starship.model}</p>
    </div>
  );
};

export default StarshipCard;
