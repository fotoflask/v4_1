import React from "react";
import { Link } from "react-router-dom";
import "../css/Leftnavbar.css"; // Import shared navbar styles

const LeftNavbar = () => {
  return (
    <nav className="navbar left-navbar">
      <ul className="navbar-menu">
        <li><Link to="/">Button 1</Link></li>
        <li><Link to="/button2">Button 2</Link></li>
        <li><Link to="/button3">Button 3</Link></li>
        <li><Link to="/button4">Button 4</Link></li>
        <li><Link to="/button5">Button 5</Link></li>
        <li><Link to="/button6">Button 6</Link></li>
      </ul>
    </nav>
  );
};

export default LeftNavbar;
