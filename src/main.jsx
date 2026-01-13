import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";

/* ✅ GLOBAL iOS SAFARI POLYFILL */
if (!("requestIdleCallback" in window)) {
  window.requestIdleCallback = (cb) => setTimeout(cb, 1);
  window.cancelIdleCallback = (id) => clearTimeout(id);
}

/* ✅ Render App */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
