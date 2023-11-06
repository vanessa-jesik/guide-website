import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function AdminNav() {
  const location = useLocation();
  return (
    <>
      <NavLink
        to="admin_trips"
        className={`text-gray-800 px-3 py-1 hover:underline ${
          location.pathname === "/admin/admin_trips" ? "font-bold" : ""
        }`}
      >
        MANAGE TRIPS
      </NavLink>
      <NavLink
        to="admin_reviews"
        className={`text-gray-800 px-3 py-1 hover:underline ${
          location.pathname === "/admin/admin_reviews" ? "font-bold" : ""
        }`}
      >
        MANAGE REVIEWS
      </NavLink>
      <NavLink
        to="admin_clients"
        className={`text-gray-800 px-3 py-1 hover:underline ${
          location.pathname === "/admin/admin_clients" ? "font-bold" : ""
        }`}
      >
        MANAGE CLIENTS
      </NavLink>
    </>
  );
}

export default AdminNav;
