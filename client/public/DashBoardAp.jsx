import React, { useState } from "react";
import MenuLateralAp from "../src/pages/DashBoard/DashBoardComponents/DashAp/MenuLateralAp";
import HomeDash from "../src/pages/DashBoard/HomeDash";
import ActivBot from "../src/pages/DashBoard/DashBoardComponents/DashA/ActivBot";
import NavbarAp from "../src/pages/DashBoard/DashBoardComponents/DashAp/NavbarAp";
import Alquiler from "../src/pages/Alquiler/Alquiler";
import CalendarioAdmin from "../src/pages/CalendarioAdmin/Calendario";
import Feedbacks from "../src/pages/Feedback/Feedbacks";
import ConstanciaCertificado from "../src/pages/ConstanciaCertificado/Constancia";
import Ludicas from "../src/pages/Ludicas/Ludicas";
import HorasLudicas from "../src/pages/HorasLudicas/HorasLudicas";


import "../src/styles/BotHp.css";
import "../src/styles/ColaViento.css";
import "../src/styles/Resposive.css";
import "../src/styles/global.css";
import Actividades from "../src/pages/Actividades/Actividades";
import Aplicacion from "../src/pages/Aplicacion/Aplicacion";

export default function DashBoard() {
  const [menuAbierto, setMenuAbierto] = useState(true);
  const [contenidoActual, setContenidoActual] = useState("home"); 
  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <section className="contenedordash">
      <MenuLateralAp menuAbierto={menuAbierto} toggleMenu={toggleMenu} setContenidoActual={setContenidoActual} />
      <main className="contenidodash">
        <NavbarAp toggleMenu={toggleMenu} />

        {contenidoActual === "home" && <HomeDash />}
        {contenidoActual === "actividades" && <Actividades />}
        {contenidoActual === "aplicacion" && <Aplicacion />}
        {contenidoActual === "ludicas" && <Ludicas />}
        {contenidoActual === "horasl" && <HorasLudicas />}
        {contenidoActual === "feedback" && <Feedbacks />}
        {contenidoActual === "constancia" && < ConstanciaCertificado />}
        {contenidoActual === "alquiler" && <Alquiler />}
        {contenidoActual === "calendario" && <CalendarioAdmin />}







      </main>
      <ActivBot />
    </section>
  );
}