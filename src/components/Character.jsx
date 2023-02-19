import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { CHARACTER_URL } from "../constants";

import Characters from "./Characters";

function Character({ id }) {
  const [isLoading, setLoading] = useState(true);
  const [character, setCharacter] = useState();
  const [characterId, setCharacterId] = useState(id);

  useEffect(() => {
    const fetchCharacter = fetch(`${CHARACTER_URL}/${characterId}`);

    fetchCharacter
      .then((res) => res.json())
      .then(
        (result) => {
          setCharacter(result);
          setLoading(false);
        },
        (error) => {}
      );
  }, [characterId]);

  if (isLoading) return <h1>Loading...</h1>;

  if (!characterId && characterId !== 0) return <Characters />;

  return (
    <div id="character_detail">
      <div className="character-block">
        <img src={character.imageUrl} alt={character.fullName}></img>
        <h1>{character.fullName}</h1>
        <h2>{character.title}</h2>
      </div>
      <div className="character-return">
        <h3 onClick={() => setCharacterId(null)}>Return to all characters</h3>
      </div>
    </div>
  );
}

export default Character;
