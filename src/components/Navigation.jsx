import React from "react";
import './styles/Navigation.scss';

class Navigation extends React.Component {
    render() {
        return  <nav className="navigation">
                   <ul>
                       <li><a href="/">Home</a></li>
                       <li><a href="/">Characters</a></li>
                       <li><a href="/">World Map</a></li>
                   </ul>
                </nav>
    }
}

export default Navigation;