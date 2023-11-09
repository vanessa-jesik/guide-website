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
import ClientById from "./ClientById.js";
import AdminPage from "./AdminPage.js";

export const CurrentUserContext = React.createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [trips, setTrips] = useState(null);
  const [reviews, setReviews] = useState(null);

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

  useEffect(() => {
    fetch("/trips")
      .then(response => response.json())
      .then(trips => setTrips(trips))
      .catch(error => {
        console.error("Error retrieving trips:", error);
      });
  }, []);

  useEffect(() => {
    fetch("/reviews")
      .then(response => response.json())
      .then(reviews => setReviews(reviews))
      .catch(error => {
        console.error("Error retrieving reviews:", error);
      });
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        reviews,
        setReviews,
        trips,
        setTrips,
      }}
    >
      <div className="selection:bg-gray-200">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/create_account" element={<CreateAccount />} />
            <Route path="/sign_in" element={<SignIn />} />
            <Route path="/my_page" element={<ClientById />} />
            {/* Routes only available to admin*/}
            {currentUser?.user_type === "admin" ? (
              <Route path="/admin/*" element={<AdminPage />} />
            ) : null}
          </Routes>
        </LocalizationProvider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
