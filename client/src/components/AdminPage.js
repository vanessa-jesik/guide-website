import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AdminNav from "./AdminNav.js";
import AdminTrips from "./AdminTrips.js";
import AdminClients from "./AdminClients.js";
import AdminClientTrips from "./AdminClientTrips.js";
import AdminReviews from "./AdminReviews.js";

function AdminPage() {
  const location = useLocation();

  return (
    <>
      <AdminNav />
      {location.pathname === "/admin" ? (
        <p className="text-5xl text-center mt-5">Welcome Admin!</p>
      ) : null}
      <Routes>
        <Route path="/admin_trips" element={<AdminTrips />} />
        <Route path="/admin_clients" element={<AdminClients />} />
        <Route path="/admin_client_trips" element={<AdminClientTrips />} />
        <Route path="/admin_reviews" element={<AdminReviews />} />
      </Routes>
    </>
  );
}

export default AdminPage;
