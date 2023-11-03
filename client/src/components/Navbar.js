import React, { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { CurrentClientContext } from "./App.js";

function Navbar() {
  const { currentClient, setCurrentClient } = useContext(CurrentClientContext);
  const location = useLocation();
  const navigate = useNavigate();

  function handleSignOut() {
    fetch("/sign_out", { method: "DELETE" })
      .then(response => {
        if (response.ok) {
          setCurrentClient(null);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <nav className="bg-lapis-dark p-4 flex justify-between items-center">
      {!currentClient ? (
        <div className="flex items-center space-x-4">
          <NavLink
            to="/"
            className={`text-alice-light px-3 py-1 hover:underline ${
              location.pathname === "/" ? "bg-sky" : ""
            }`}
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            className={`text-alice-light px-3 py-1 hover:underline ${
              location.pathname === "/about" ? "bg-sky" : ""
            }`}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/trips"
            className={`text-alice-light px-3 py-1 hover:underline ${
              location.pathname === "/trips" ? "bg-sky" : ""
            }`}
          >
            TRIPS
          </NavLink>
          <NavLink
            to="/create_account"
            className={`text-alice-light px-3 py-1 hover:underline ${
              location.pathname === "/create_account" ? "bg-sky" : ""
            }`}
          >
            CREATE ACCOUNT
          </NavLink>
          <NavLink
            to="/sign_in"
            className={`text-alice-light px-3 py-1 hover:underline ${
              location.pathname === "/sign_in" ? "bg-sky" : ""
            }`}
          >
            SIGN IN
          </NavLink>
        </div>
      ) : (
        <>
          <div className="flex items-center space-x-4">
            <NavLink
              to="/"
              className={`text-alice-light px-3 py-1 hover:underline ${
                location.pathname === "/" ? "bg-sky" : ""
              }`}
            >
              HOME
            </NavLink>
            <NavLink
              to="/about"
              className={`text-alice-light px-3 py-1 hover:underline ${
                location.pathname === "/about" ? "bg-sky" : ""
              }`}
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/trips"
              className={`text-alice-light px-3 py-1 hover:underline ${
                location.pathname === "/trips" ? "bg-sky" : ""
              }`}
            >
              TRIPS
            </NavLink>
          </div>
          <button
            onClick={() => {
              handleSignOut();
              navigate("/");
            }}
            className="bg-shimmer-dark text-alice-light px-4 py-2 rounded-md hover:border-solid hover:border-2 hover:border-alice-dark"
          >
            SIGN OUT
          </button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
