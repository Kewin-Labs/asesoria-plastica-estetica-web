import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { initAnalytics } from "./utils/analytics.js";
import { captureAttribution } from "./utils/attribution.js";
import "./styles/variables.css";
import "./styles/global.css";
import "./styles/sections.css";

captureAttribution();
initAnalytics();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
