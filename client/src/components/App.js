import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import About from "./About.js";
import Trips from "./Trips.js";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/trips" element={<Trips />} />
      </Routes>
    </div>
  );
}

export default App;
