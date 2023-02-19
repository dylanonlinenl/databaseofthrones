import { useEffect, useState } from "react";
import Character from "./Character";
import { CHARACTER_URL } from "../constants";

function Characters() {
  const [error, setError] = useState(null); // Object type. {key: string, value: [string]}
  const [isLoaded, setIsLoaded] = useState(true);
  const [characters, setCharacters] = useState({});
  const [characterId, setCharacterId] = useState();

  useEffect(() => {
    let fetchId;
    fetchId = fetch(`${CHARACTER_URL}`);

    fetchId
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(false);
          setCharacters(result);
        },
        (error) => {
          setIsLoaded(false);
          setError(error);
        }
      );
  }, [characterId]);

  if (isLoaded)
    return (
      <div className="loading-message">
        <h1>Loading...</h1>
      </div>
    );

  if (error) return <div>Error: {error.message}</div>;

  if (characterId || characterId === 0) return <Character id={characterId}/>

  return (
    <div id="character_grid">
      {characters.map((character) => {
        return (
          <div className="character-block" key={character.id}>
            <img
              src={character.imageUrl}
              alt={character.fullName}
              onClick={() => {
                setCharacterId(character.id);
              }}
            ></img>
            <h1>{character.fullName}</h1>
            <h2>{character.title}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default Characters;
