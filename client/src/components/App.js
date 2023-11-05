import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import About from "./About.js";
import Trips from "./Trips.js";
import CreateAccount from "./CreateAccount.js";
import SignIn from "./SignIn.js";
import AdminPage from "./AdminPage.js";

export const CurrentUserContext = React.createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch("/check_session")
      .then(response => {
        if (response.ok) {
          response.json().then(user => setCurrentUser(user));
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="selection:bg-gray-200">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/create_account" element={<CreateAccount />} />
            <Route path="/sign_in" element={<SignIn />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </LocalizationProvider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
