import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Pet Adoption Center</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/adopt">Adopt a Pet</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        

      </ul>
    </header>
  );
};

export default Header;
