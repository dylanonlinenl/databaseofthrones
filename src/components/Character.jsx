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

  /*
    Why this check? Daenerys has an id of 0...if i click on her the check if the characterId does not exist returns true.
    Which returns the Characters page, making sure that Daenerys is never shown. If I specifically check for the value 0, it will work because i can rule it out as an false check.
    Making it work!
    */
  if (!characterId && characterId !== 0) {
    return <Characters />;
  }

  /*
    This didn't work because it was not able to just print out an entire object. I had to specifically call out properties!
    */
  return (
    <div id="character_detail">
      <div className="character-block">
        <img src={character.imageUrl} alt={character.fullName}></img>
        <h1>{character.fullName}</h1>
        <h2>{character.title}</h2>
      </div>
      <div className="character-return" onClick={() => setCharacterId(null)}>
        <h3>Return to all characters</h3>
      </div>
    </div>
  );
}

export default Character;
