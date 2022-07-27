import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CountryProvider from "./store/CountryProvider";
import "../node_modules/font-awesome/css/font-awesome.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CountryProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CountryProvider>
);