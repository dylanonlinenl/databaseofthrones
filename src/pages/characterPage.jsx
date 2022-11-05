import Characters from "../components/Characters";
// General Styling
import "./styles/general.scss";
// Specific styling
import "./styles/characterPage.scss";

function CharacterPage() {
  return (
    <div className="content-container">
        <div className="content">
            <h1>Characters</h1>
            <Characters></Characters>
        </div>
    </div>
  );
}

export default CharacterPage;
