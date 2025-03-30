import React from "react";

import { Routes, Route } from "react-router-dom";
import MenuLateral from "./pages/DashBoard/DashBoardComponents/MenuLateral";
import Navbar from "./pages/DashBoard/DashBoardComponents/Navbar";
import ActivBot from "./pages/DashBoard/DashBoardComponents/ActivBot";
import HomeDash from "./pages/DashBoard/HomeDash";

import "./styles/global.css";
import "./styles/ColaViento.css";
import "./styles/BotHp.css";
import "./styles/Resposive.css";

function App() {
  return (
    <section className="contenedor">
      <MenuLateral />
      <main className="contenido">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeDash />}></Route>
        </Routes>
      </main>
      <ActivBot />
    </section>
  );
}

export default App;
