import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import About from "./About.js";
import Trips from "./Trips.js";
import CreateAccount from "./CreateAccount.js";
import SignIn from "./SignIn.js";
import SignOut from "./SignOut.js";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/create_account" element={<CreateAccount />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_out" element={<SignOut />} />
      </Routes>
    </div>
  );
}

export default App;
