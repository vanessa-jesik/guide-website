import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Router>
    <App />
  </Router>
);

// To be added for production:
// basename = "/estes_park_mountain_guide";
