import React, { useState } from "react";
import MenuLateralIn from "../src/pages/DashBoard/DashBoardComponents/DashIn/MenuLateralIn";
import HomeDash from "../src/pages/DashBoard/HomeDash";
import ActivBot from "../src/pages/DashBoard/DashBoardComponents/DashA/ActivBot";
import NavbarIn from "../src/pages/DashBoard/DashBoardComponents/DashIn/NavbarIn";
import CalendarioAdmin from "../src/pages/CalendarioAdmin/Calendario";
import Feedbacks from "../src/pages/Feedback/Feedbacks";
import Planificar from "../src/pages/Planificar/Planificar";
import Registroludicas from "../src/pages/RegistroLudicas/Registroludicas";
import Combinar from "../src/pages/CombinarFA/Combinar";


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
      <MenuLateralIn menuAbierto={menuAbierto} toggleMenu={toggleMenu} setContenidoActual={setContenidoActual} />
      <main className="contenidodash">
        <NavbarIn toggleMenu={toggleMenu} />

        {contenidoActual === "home" && <HomeDash />}
        {contenidoActual === "actividades" && <Actividades />}
        {contenidoActual === "aplicacion" && <Aplicacion />}
        {contenidoActual === "plan" && <Planificar />}
        {contenidoActual === "registrarl" && <Registroludicas />}
        {contenidoActual === "feedback" && <Feedbacks />}
        {contenidoActual === "comprobar" && < Combinar />}
        {contenidoActual === "calendario" && <CalendarioAdmin />}







      </main>
      <ActivBot />
    </section>
  );
}