import React from "react";
import ReactDOM from "react-dom/client";
import "./output.css";
import Menu from "./pages/Menu";
import Survivor from "./pages/Survivor";
import Start from "./pages/Start";
import Game from "./pages/Game";
import Games from "./pages/Games";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/survivor" element={<Survivor />} />
        <Route path="/start" element={<Start />} />
        <Route path="/game" element={<Game />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
