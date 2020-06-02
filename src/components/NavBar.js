import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return <nav className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  </nav>;
}
