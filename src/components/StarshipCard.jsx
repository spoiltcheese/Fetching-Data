import React from "react";

const StarshipCard = (props) => {
  return (
    <>
      <h4>{props.starship.name}</h4>{" "}
      <ul>
        <li>Class: {props.starship.starship_class}</li>
        <li>Manufacturer: {props.starship.manufacturer}</li>
        <li>Model: {props.starship.model}</li>
      </ul>
    </>
  );
};

export default StarshipCard;
