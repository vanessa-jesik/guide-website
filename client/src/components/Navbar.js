import React, { useContext } from "react";
import { CurrentClientContext } from "./App.js";
import { NavLink } from "react-router-dom";

function Navbar() {
  const currentClient = useContext(CurrentClientContext);

  function handleSignOut() {
    fetch("/sign_out", { method: "DELETE" })
      .then(response => {
        if (response.ok) {
          console.log("need to clear current client");
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div>
      {currentClient ? (
        <nav>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/trips">TRIPS</NavLink>
          <button
            onClick={handleSignOut}
            className="bg-lapis text-parchment px-4 py-2 mx-4 my-2 border-solid border-2 border-lapis-dark rounded-md hover:bg-hunter"
          >
            SIGN OUT
          </button>
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
