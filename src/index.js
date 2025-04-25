// index.js (or App.js)
import React from "react";
import ReactDOM from "react-dom/client";  // Use 'react-dom/client' in React 18+
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App"; // Import your main App component

// Create a root using createRoot and render the app inside the root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
