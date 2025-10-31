import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Apps from "./components/Apps"; 
import "./index.css";
import Home from "./components/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home/>} />
        <Route path="/apps" element={<Apps/>} />


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
