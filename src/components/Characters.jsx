import {useEffect, useState} from "react";

function Characters() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [characters, setCharacters] = useState({});
    const [characterId, setCharacterId] = useState(null);

    function eventCallback(event) {
        setCharacterId(event.target.id);
    }

    useEffect(() => {
        let fetchId;
        characterId ? fetchId = fetch(`https://thronesapi.com/api/v2/Characters/${characterId}`) : fetchId = fetch("https://thronesapi.com/api/v2/Characters");
        fetchId.then((res) => res.json())
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
    }, [characterId]);

    if (!isLoaded) {
        return <div className="loading-message"><h1>Loading...</h1></div>;
    } else if (error) {
        return <div>Error: {error.message}</div>;
    } else if (Object.values(characters)[0] === parseInt(characterId)) {
        let character = characters;
        return (
            <div id="character_detail">
                <div className="character-block">
                    <img src={character.imageUrl} alt={character.fullName}></img>
                    <h1>{character.fullName}</h1>
                    <h2>{character.title}</h2>
                </div>
                {/*Todo: fix going back to character grid after click on the div down here*/}
                <div className="character-return" onClick={() => setCharacterId(null)}>
                    <h3>Return to all characters</h3>
                </div>
            </div>
        );
    } else {
        return (
            <div id="character_grid">
                {characters.map((character) => {
                    return (
                        <div className="character-block">
                            <img src={character.imageUrl} alt={character.fullName} id={character.id}
                                 onClick={eventCallback}></img>
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
