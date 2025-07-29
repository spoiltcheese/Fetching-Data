import React from "react";
import StarshipCard from "./StarshipCard";

const StarshipList = (props) => {
  return (
    <section>
      {props.starships.map((starship, index) => (
        <div key={index}>
          <StarshipCard starship={starship} />
        </div>
      ))}
    </section>
  );
};

export default StarshipList;
