import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Resolutions from "./components/Resolutions";
import NotFoundRoute from "./routes/NotFoundRoute";
import ProfileRoute from "./routes/ProfileRoute";
import EditResolution from "./components/EditResolution";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index path="resolutions" element={<Resolutions />} />
        <Route path="resolutions/:resolutionId" element={<EditResolution />} />
        <Route path="profile" element={<ProfileRoute />} />
        <Route path="*" element={<NotFoundRoute />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
