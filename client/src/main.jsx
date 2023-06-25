import React from "react";
import ReactDOM from "react-dom/client";
import "./output.css";
import Menu from "./pages/Menu";
import Survivor from "./pages/Survivor";
import Start from "./pages/Start";
import Games from "./pages/Games";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StarknetConfig, InjectedConnector } from "@starknet-react/core";

const connectors = [
  new InjectedConnector({ options: { id: "braavos" } }),
  new InjectedConnector({ options: { id: "argentX" } }),
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StarknetConfig connectors={connectors}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/survivor" element={<Survivor />} />
          <Route path="/start" element={<Start />} />
          <Route path="/games" element={<Games />} />
        </Routes>
      </BrowserRouter>
    </StarknetConfig>
  </React.StrictMode>
);
