import {
  FaCalendarAlt,
  FaDiscourse,
  FaHome,
  FaTimes,
  FaRegCheckCircle,
  FaRunning ,
  FaUserGraduate,
  FaStopwatch  
} from "react-icons/fa";
import React from "react";
import logo from "../img/logo.png";

export default function MenuLateral({
  menuAbierto,
  toggleMenu,
  setContenidoActual,
}) {
  return (
    <aside className={`barradash ${menuAbierto ? "mostrar" : "ocultar"}`}>
      <section className="Clogodash">
        <img src={logo} alt="Logodash" className="logodash" />
        <h2 className="titulodash">Dashboard</h2>

        <button className="iconodash subirdash" onClick={toggleMenu}>
          <FaTimes />
        </button>
      </section>

      <nav className="menudash">
        <button onClick={() => setContenidoActual("home")} className="opciondash">
          <FaHome className="iconodash" />
          Inicio
        </button>
        <button onClick={() => setContenidoActual("ludicas")} className="opciondash">
          <FaRunning  className="iconodash" />
          Ludicas
        </button>
        <button onClick={() => setContenidoActual("horasl")} className="opciondash">
          <FaStopwatch  className="iconodash" />
          Horas Ludicas
        </button>
        <button onClick={() => setContenidoActual("feedback")} className="opciondash">
          <FaDiscourse className="iconodash" />
          FeedBack
        </button>
        <button onClick={() => setContenidoActual("constancia")} className="opciondash">
          <FaUserGraduate className="iconodash" />
          Constancia
        </button>
        <button onClick={() => setContenidoActual("alquiler")} className="opciondash">
          <FaRegCheckCircle className="iconodash" />
          Alquiler
        </button>
        <button onClick={() => setContenidoActual("calendario")} className="opciondash">
          <FaCalendarAlt className="iconodash" />
          Calendario
        </button>

        <img src={logo} alt="" />
      </nav>
    </aside>
  );
}
