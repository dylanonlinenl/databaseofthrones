import Characters from "../components/Characters";
// General Styling
import "./styles/general.scss";
// Specific styling
import "./styles/characterPage.scss";

function CharacterPage() {
  return (
    <div className="content-container">
      <h1>Characters</h1>
      <Characters></Characters>
    </div>
  );
}

export default CharacterPage;
