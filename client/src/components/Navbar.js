import React, { useContext } from "react";
import { CurrentClientContext } from "./App.js";
import { NavLink } from "react-router-dom";

function Navbar() {
  const currentClient = useContext(CurrentClientContext);

  return (
    <div>
      {currentClient ? (
        <nav>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/trips">TRIPS</NavLink>
          <NavLink to="/sign_out">SIGN OUT</NavLink>
        </nav>
      ) : (
        <nav>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/trips">TRIPS</NavLink>
          <NavLink to="/create_account">CREATE ACCOUNT</NavLink>
          <NavLink to="/sign_in">SIGN IN</NavLink>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
