import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UniversalProvider } from "./components/context/UniversalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UniversalProvider>
    <App />
  </UniversalProvider>
);
