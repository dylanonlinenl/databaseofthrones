import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { CHARACTER_URL } from "../constants";


function Character({characterId}) {
  const [isLoading, setLoading] = useState(true)
  const [character, setCharacter] = useState()

  useEffect(() => {
    const fetchCharacter = fetch(`${CHARACTER_URL}/${characterId}`)

    fetchCharacter.then((res) => res.json()).then(
      (result) => {
        setCharacter(result);
        setLoading(false)
      },
      (error) => {
      }
    )
  
  }, [])

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div>Doe render, {character}</div>
    // <div id="character_detail">
    //     <div className="character-block">
    //         <img src={character.imageUrl} alt={character.fullName}></img>
    //         <h1>{character.fullName}</h1>
    //         <h2>{character.title}</h2>
    //     </div>
    //     {/*Todo: fix going back to character grid after click on the div down here*/}
    //     {/* <div className="character-return" onClick={() => setCharacterId(null)}>
    //         <h3>Return to all characters</h3>
    //     </div> */}
    // </div>
  )
}

export default Character