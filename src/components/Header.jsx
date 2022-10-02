import React from "react";
import './styles/Header.scss';
import Navigation from "./Navigation";

class Header extends React.Component {
    render() {
    return  <header className="header">
                <div>
                    <h1>Database of Thrones</h1>
                    <p>For all Game of Thrones information</p>
                </div>
                <Navigation></Navigation>
            </header>
    }
}

export default Header;