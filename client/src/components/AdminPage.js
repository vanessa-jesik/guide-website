import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminNav from "./AdminNav.js";
import AdminTrips from "./AdminTrips.js";
import AdminReviews from "./AdminReviews.js";
import AdminClients from "./AdminClients.js";

function AdminPage() {
  return (
    <>
      <AdminNav />
      <p>Admin Page</p>
      <Routes>
        <Route path="/admin_trips" element={<AdminTrips />} />
        <Route path="/admin_reviews" element={<AdminReviews />} />
        <Route path="/admin_clients" element={<AdminClients />} />
      </Routes>
    </>
  );
}

export default AdminPage;
