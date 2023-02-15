import "./styles/App.scss";
import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Characters from "./pages/characterPage";
import WorldMap from "./pages/worldMap";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <header className="header">
            <div>
              <h1>Database of Thrones</h1>
              <p>For all Game of Thrones information</p>
            </div>
            <ul>
              <li>
                <Link to="/">Characters</Link>
              </li>
              <li>
                <Link to="/world-map">World Map</Link>
              </li>
            </ul>
          </header>
          <Routes>
            <Route exact path="/" element={<Characters />}></Route>
            <Route exact path="/world-map" element={<WorldMap />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
