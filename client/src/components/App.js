import React, { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import About from "./About.js";
import Trips from "./Trips.js";
import CreateAccount from "./CreateAccount.js";
import SignIn from "./SignIn.js";
import SignOut from "./SignOut.js";

export const CurrentClientContext = createContext(null);

function App() {
  const [currentClient, setCurrentClient] = useState(null);

  useEffect(() => {
    fetch("/check_session")
      .then(response => {
        if (response.ok) {
          response.json().then(client => {
            setCurrentClient(client);
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <CurrentClientContext.Provider value={currentClient}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/create_account" element={<CreateAccount />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_out" element={<SignOut />} />
      </Routes>
    </CurrentClientContext.Provider>
  );
}

export default App;
