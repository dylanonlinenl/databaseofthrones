import { useEffect, useState } from "react";
import Continent from './Continent';
import { CONTINENT_URL } from "../constants";

function Continents() {
  const [error, setError] = useState(null); // Object type. {key: string, value: [string]}
  const [isLoaded, setIsLoaded] = useState(true);
  const [continents, setContinents] = useState({});
  const [continentId, setContinentId] = useState();

  useEffect(() => {
    let fetchId;

    fetchId = fetch(`${CONTINENT_URL}`);

    fetchId
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(false);
          setContinents(result);
        },
        (error) => {
          setIsLoaded(false);
          setError(error);
        }
      );
  }, [continentId]);

  if (isLoaded)
    return (
      <div className="loading-message">
        <h1>Loading...</h1>
      </div>
    );

  if (error) return <div>Error: {error.message}</div>;

  if (continentId || continentId === 0) return <Continent id={continentId} />;

  return (
    <div id="continent_grid">
      {continents.map((continent) => {
        return (
          <div className="continent-block" key={continent.id}>
            <h1 onClick={() => setContinentId(continent.id)}>{continent.name}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Continents;
