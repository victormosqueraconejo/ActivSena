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
import Actividades from "../src/pages/Actividades/Actividades";
import Aplicacion from "../src/pages/Aplicacion/Aplicacion";
import AprendizRun from "../src/pages/AprendizC/AprendizRun";
import PlanificarEvento from "../src/pages/PlanificarEv/PlanificarEvento";
import RegistroA from "../src/pages/RegistroAsistencia/RegistroA";
import CartaContacto from "../src/pages/CartasContacto/CartaContacto";
import Rectificar from "../src/pages/Rectificar/Rectificar";
import ChatAI from '../src/pages/ChatAI/ChatAI'
import UserViewIn from "../src/pages/UserView/UserViewIn";
import ConfigViewIn from "../src/pages/ConfigView/ConfigViewIn";


import "../src/styles/BotHp.css";
import "../src/styles/ColaViento.css";
import "../src/styles/Resposive.css";
import "../src/styles/global.css";




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
      <NavbarIn toggleMenu={toggleMenu} setContenidoActual={setContenidoActual} />

        {contenidoActual === "home" && <HomeDash />}
        {contenidoActual === "actividades" && <Actividades />}
        {contenidoActual === "aplicacion" && <Aplicacion />}
        {contenidoActual === "plan" && <Planificar />}
        {contenidoActual === "registrarl" && <Registroludicas />}
        {contenidoActual === "feedback" && <Feedbacks />}
        {contenidoActual === "comprobar" && < Combinar />}
        {contenidoActual === "calendario" && <CalendarioAdmin />}
        {contenidoActual === "aprendiz" && <AprendizRun />}
        {contenidoActual === "planevento" && <PlanificarEvento />}
        {contenidoActual === "registro" && <RegistroA />}
      {contenidoActual === "cartacontacto" && <CartaContacto />}
         {contenidoActual === "rectificar" && <Rectificar />}
         {contenidoActual === "chatai" && <ChatAI />}
         {contenidoActual === "perfil" && <UserViewIn />}
        {contenidoActual === "config" && <ConfigViewIn />}
         










      </main>
        <ActivBot irAChatai={() => setContenidoActual("chatai")} />
    </section>
  );
}