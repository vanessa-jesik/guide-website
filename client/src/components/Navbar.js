import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/about">ABOUT</NavLink>
      <NavLink to="/trips">TRIPS</NavLink>
      <NavLink to="/create_account">CREATE ACCOUNT</NavLink>
      <NavLink to="/sign_in">SIGN IN</NavLink>
      <NavLink to="/sign_out">SIGN OUT</NavLink>
    </nav>
  );
}

export default Navbar;
