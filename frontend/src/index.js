// React entry file (main root render)
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css"; // importing global styles

// Create root element and render App
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);