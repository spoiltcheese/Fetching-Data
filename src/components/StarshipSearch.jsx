import React, { use } from "react";
import { useState, useEffect } from "react";

const StarshipSearch = (props) => {
  const [prevSearchTerm, setPrevSearchTerm] = useState("");
  const handleInputChange = (e) => {
    props.setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (props.searchTerm) {
      setPrevSearchTerm(props.searchTerm);
    }
  }, [props.searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh

    props.setSearchTerm("");
  };
  return (
    <div className="">
      <h3>
        {prevSearchTerm
          ? `Previous Search: ${prevSearchTerm}`
          : "Search for a starship by name."}
      </h3>

      <h3>
        {props.starships.length > 0
          ? `${props.starships.length} Results Found`
          : "No Results Found"}
      </h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Starship Name"
          value={props.searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary">
          Reset
        </button>
      </form>
    </div>
  );
};

export default StarshipSearch;
