import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AdminNav from "./AdminNav.js";
import AdminTrips from "./AdminTrips.js";
import AdminReviews from "./AdminReviews.js";
import AdminClients from "./AdminClients.js";

function AdminPage() {
  const location = useLocation();

  return (
    <>
      <AdminNav />
      {location.pathname === "/admin" ? <p>Welcome Admin!</p> : null}
      <Routes>
        <Route path="/admin_trips" element={<AdminTrips />} />
        <Route path="/admin_reviews" element={<AdminReviews />} />
        <Route path="/admin_clients" element={<AdminClients />} />
      </Routes>
    </>
  );
}

export default AdminPage;
