import React, { useContext } from "react";
import { CurrentClientContext } from "./App.js";
import { NavLink } from "react-router-dom";

function Navbar() {
  const currentClient = useContext(CurrentClientContext);

  return (
    <nav>
      {currentClient ? <p>there is a current client</p> : <p>not yet</p>}
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
