import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "font-awesome/css/font-awesome.min.css";
import { LoadingProvider } from "./services/LoadingContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoadingProvider>
      <App />
    </LoadingProvider>
  </React.StrictMode>
);
