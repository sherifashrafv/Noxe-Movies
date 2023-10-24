import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Component/App/App";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "./index.scss";
import MediaContextProvider from "./Component/Context/mediaContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MediaContextProvider>
      <App />
    </MediaContextProvider>
  </React.StrictMode>
);
