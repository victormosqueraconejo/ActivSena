import React, { useState } from "react";
import MenuLateral from "../src/pages/DashBoard/DashBoardComponents/MenuLateral";
import HomeDash from "../src/pages/DashBoard/HomeDash";
import ActivBot from "../src/pages/DashBoard/DashBoardComponents/ActivBot";
import Navbar from "../src/pages/DashBoard/DashBoardComponents/Navbar";

import "../src/styles/BotHp.css";
import "../src/styles/ColaViento.css";
import "../src/styles/Resposive.css";
import "../src/styles/global.css";

export default function DashBoard() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <>
      <section className="contenedor">
        <MenuLateral menuAbierto={menuAbierto} toggleMenu={toggleMenu} />
        <main className="contenido">
          <Navbar toggleMenu={toggleMenu} />
          <HomeDash></HomeDash>
        </main>
        <ActivBot></ActivBot>
      </section>
    </>
  );
}
