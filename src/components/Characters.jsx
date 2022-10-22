import { useEffect, useState } from "react";

function Characters() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCharacters(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div id="character_grid">
        {characters.map((character) => {
          return (
            <div id={character.id}>
              <img src={character.imageUrl} alt={character.fullName}></img>
              <h1>{character.fullName}</h1>
              <h2>{character.title}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Characters;
