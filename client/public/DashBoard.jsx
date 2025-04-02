import React, { useState } from "react";
import MenuLateral from "../src/pages/DashBoard/DashBoardComponents/DashA/MenuLateral";
import HomeDash from "../src/pages/DashBoard/HomeDash";
import ActivBot from "../src/pages/DashBoard/DashBoardComponents/DashA/ActivBot";
import Navbar from "../src/pages/DashBoard/DashBoardComponents/DashA/Navbar";
import Alquiler from "../src/pages/Alquiler/Alquiler";
import CalendarioAdmin from "../src/pages/CalendarioAdmin/Calendario";
import DetallesAlquiler from "../src/pages/DetallesAlquiler/DetallerAlquiler";
import Feedbacks from "../src/pages/Feedback/Feedbacks";
import ConstanciaCertificado from "../src/pages/ConstanciaCertificado/Constancia";
import Actividades from "../src/pages/Actividades/Actividades";

import "../src/styles/BotHp.css";
import "../src/styles/ColaViento.css";
import "../src/styles/Resposive.css";
import "../src/styles/global.css";
import "../src/styles/Fondo.css";
import Aplicacion from "../src/pages/Aplicacion/Aplicacion";

export default function DashBoard() {
  const [menuAbierto, setMenuAbierto] = useState(true);
  const [contenidoActual, setContenidoActual] = useState("home"); 
  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <section className="contenedordash">
            <MenuLateral menuAbierto={menuAbierto} toggleMenu={toggleMenu} setContenidoActual={setContenidoActual} />
      <main className="contenidodash">
        <Navbar toggleMenu={toggleMenu} />

        {contenidoActual === "home" && <HomeDash />}
        {contenidoActual === "actividad" && <Actividades />}
        {contenidoActual === "aplicacion" && <Aplicacion />}
        {contenidoActual === "calendario" && <CalendarioAdmin />}
        {contenidoActual === "registroa" && <Alquiler />}
        {contenidoActual === "detallea" && <DetallesAlquiler />}
        {contenidoActual === "feedback" && <Feedbacks />}
        {contenidoActual === "constancia" && <ConstanciaCertificado />}






      </main>
      <ActivBot />
    </section>
  );
}