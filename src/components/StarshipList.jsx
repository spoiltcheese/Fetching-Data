import React from "react";
import StarshipCard from "./StarshipCard";

const StarshipList = (props) => {
  return (
    <div>
      {props.starships.map((starship, index) => (
        <div key={index}>
          <StarshipCard starship={starship} />
        </div>
      ))}
    </div>
  );
};

export default StarshipList;
