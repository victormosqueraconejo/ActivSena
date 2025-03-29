import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Routes, Route } from "react-router-dom";
import MenuLateral from "../client/src/pages/DashBoard/DashBoardComponents/MenuLateral";
import Navbar from "../client/src/pages/pages/DashBoard/DashBoardComponents/Navbar";
import ActivBot from "../client/src/pages/pages/DashBoard/DashBoardComponents/ActivBot";
import HomeDash from "../client/src/pages/pages/DashBoard/HomeDash";

import "../client/src/styles/global.css";
import "../client/src/styles/ColaViento.css";
import "../client/src/styles/BotHp.css";
import "..client/src/styles/Resposive.css";
import "../client/src/styles/Secciones.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>

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

  </StrictMode>,
)
