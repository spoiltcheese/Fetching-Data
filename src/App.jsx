import React, { use } from "react";
import StarshipSearch from "./components/StarshipSearch";
import StarshipList from "./components/StarshipList";
import { useState, useEffect } from "react";
import { index } from "./services/starshipServices";

function App() {
  const [starshipData, setStarshipData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedStarships, setDisplayedStarships] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await index();
      setStarshipData(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Filter starships by name
    const filtered = starshipData.filter((ship) =>
      ship.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDisplayedStarships(filtered);
  }, [searchTerm, starshipData]);

  return (
    <div>
      <StarshipSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        starships={displayedStarships}
      />
      {/* <StarshipList starships={starshipData} /> */}
      <StarshipList starships={displayedStarships} />
      {starshipData.length === 0 && <p>Loading starships...</p>}
    </div>
  );
}

export default App;
