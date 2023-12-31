import React, { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "./App.js";

// Image import
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./icons", false, /\.(png|jpe?g|svg)$/)
);

function Navbar() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const location = useLocation();
  const navigate = useNavigate();

  function handleSignOut() {
    fetch("/sign_out", { method: "DELETE" })
      .then(response => {
        if (response.ok) {
          setCurrentUser(null);
          navigate("/");
        }
      })
      .catch(error => {
        console.error("Error signing out:", error);
      });
  }

  return (
    <nav className="bg-lapis-dark p-4 flex justify-between items-center">
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
          EXPLORE OUTINGS
        </NavLink>
        {!currentUser ? (
          <NavLink
            to="/create_account"
            className={`text-alice-light px-3 py-1 hover:underline ${
              location.pathname === "/create_account" ? "bg-sky" : ""
            }`}
          >
            CREATE ACCOUNT
          </NavLink>
        ) : (
          <NavLink
            to="/my_page"
            className={`text-alice-light px-3 py-1 hover:underline ${
              location.pathname === "/my_page" ? "bg-sky" : ""
            }`}
          >
            START YOUR ADVENTURE
          </NavLink>
        )}
        {currentUser?.user_type === "admin" ? (
          <NavLink
            to="/admin"
            className={`text-alice-light px-3 py-1 hover:underline ${
              location.pathname.startsWith("/admin") ? "bg-sky" : ""
            }`}
          >
            ADMIN
          </NavLink>
        ) : null}
      </div>
      <div className="flex items-center justify-between">
        {currentUser ? (
          <button
            onClick={() => {
              handleSignOut();
              navigate("/");
            }}
            className="bg-shimmer-dark text-alice-light px-4 py-2 mx-4 rounded-md hover:border-solid hover:border-2 hover:border-alice-dark"
          >
            SIGN OUT
          </button>
        ) : (
          <button
            onClick={() => {
              navigate("/sign_in");
            }}
            className="bg-shimmer-dark text-alice-light px-4 py-2 mx-4 rounded-md hover:border-solid hover:border-2 hover:border-alice-dark"
          >
            SIGN IN
          </button>
        )}
        <img
          src={images["mountain_icon.png"]}
          alt="mountain icon by flaticon"
          className="h-16 mx-4"
        />
      </div>
    </nav>
  );
}

export default Navbar;
