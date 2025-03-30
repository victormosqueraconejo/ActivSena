import React, { useState } from "react";
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
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <section className="contenedor">
      <MenuLateral menuAbierto={menuAbierto} toggleMenu={toggleMenu} />
      <main className="contenido">
        <Navbar toggleMenu={toggleMenu} />
        <Routes>
          <Route path="/" element={<HomeDash />} />
        </Routes>
      </main>
      <ActivBot />
    </section>
  );
}

export default App;
