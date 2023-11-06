import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function AdminNav() {
  const location = useLocation();
  return (
    <>
      <NavLink
        to="admin_trips"
        className={`text-alice-light px-3 py-1 hover:underline ${
          location.pathname === "/admin/admin_trips" ? "bg-sky" : ""
        }`}
      >
        MANAGE TRIPS
      </NavLink>
      <NavLink
        to="admin_reviews"
        className={`text-alice-light px-3 py-1 hover:underline ${
          location.pathname === "/admin/admin_reviews" ? "bg-sky" : ""
        }`}
      >
        MANAGE REVIEWS
      </NavLink>
      <NavLink
        to="admin_clients"
        className={`text-alice-light px-3 py-1 hover:underline ${
          location.pathname === "/admin/admin_clients" ? "bg-sky" : ""
        }`}
      >
        MANAGE CLIENTS
      </NavLink>
    </>
  );
}

export default AdminNav;
