import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/about">ABOUT</NavLink>
      <NavLink to="/trips">TRIPS</NavLink>
    </nav>
  );
}

export default Navbar;
