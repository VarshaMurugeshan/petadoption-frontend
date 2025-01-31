import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../styles/navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  return (
    <header className="header">
      <div className="logo">
        <h1>Pet Adoption Center</h1>
      </div>
      <nav>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/adopt">Adopt a Pet</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {!isLoggedIn && <li><Link to="/login">Login</Link></li>}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
