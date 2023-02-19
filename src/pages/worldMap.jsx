import Continents from "../components/Continents";
// General Styling
import "./styles/general.scss";
// Specific styling
import "./styles/worldMap.scss";

function WorldMap() {
  return (
    <div className="content-container world-map">
      <h1>World Map</h1>
      <Continents/>
    </div>
  );
}

export default WorldMap;
