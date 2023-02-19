import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { CONTINENT_URL } from "../constants";

import Continents from "./Continents";

function Continent({ id }) {
  const [isLoading, setLoading] = useState(true);
  const [continent, setContinent] = useState();
  const [continentId, setContinentId] = useState(id);

  useEffect(() => {
    const fetchContinent = fetch(`${CONTINENT_URL}/${continentId}`);

    fetchContinent
      .then((res) => res.json())
      .then(
        (result) => {
          setContinent(result);
          setLoading(false);
        },
        (error) => {}
      );
  }, [continentId]);

  if (isLoading) return <h1>Loading...</h1>;

  if (!continentId && continentId !== 0) return <Continents />;
  
  return (
    <div id="continent_detail">
      <div className="character-block">
        <h1>{continent.name}</h1>
      </div>
      <div className="character-return">
        <h3 onClick={() => setContinentId(null)}>Return to all continents</h3>
      </div>
    </div>
  );
}

export default Continent;
