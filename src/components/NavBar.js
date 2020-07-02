import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return <nav className="navbar">
    <div className="nav">
      <div className="nav-content--left">
        <img src={require('../images/cocktail.png')} alt="cocktail"className="nav-image"/>
      </div>
      <div className="nav-content--right">
        <ul className="nav-links">
            <li>
              <Link to="/" className="btn btn-nav btn-animated">Home</Link>
            </li>
            <li>
              <Link to="/random" className="btn btn-nav btn-animated">Randomizer</Link>
            </li>
            <li>
              <Link to="/ingredient" className="btn btn-nav btn-animated">Ingredient</Link>
            </li>
            <li>
              <Link to="/bookings" className="btn btn-nav btn-animated">Bookings</Link>
            </li>
          </ul>
      </div>
    </div>
  </nav>;
}
