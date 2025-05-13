import {
  FaCalendarAlt,
  FaDiscourse,
  FaHome,
  FaTimes,
  FaCheckSquare,
  FaTasks,
  FaFileContract,
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
        <button
          onClick={() => setContenidoActual("home")}
          className="opciondash"
        >
          <FaHome className="iconodash" />
          Inicio
        </button>
        <button
          onClick={() => setContenidoActual("actividades")}
          className="opciondash"
        >
          <FaHome className="iconodash" />
          Actividades
        </button>
        <button
          onClick={() => setContenidoActual("aplicacion")}
          className="opciondash"
        >
          <FaHome className="iconodash" />
          Aplicacion
        </button>
        <button
          onClick={() => setContenidoActual("plan")}
          className="opciondash"
        >
          <FaTasks className="iconodash" />
          Planificacion
        </button>
        <button
          onClick={() => setContenidoActual("registrarl")}
          className="opciondash"
        >
          <FaCheckSquare className="iconodash" />
          Registrar Ludica
        </button>
        <button
          onClick={() => setContenidoActual("feedback")}
          className="opciondash"
        >
          <FaDiscourse className="iconodash" />
          FeedBack
        </button>
        <button
          onClick={() => setContenidoActual("comprobar")}
          className="opciondash"
        >
          <FaFileContract className="iconodash" />
          ComprobarFA
        </button>
        <button
          onClick={() => setContenidoActual("calendario")}
          className="opciondash"
        >
          <FaCalendarAlt className="iconodash" />
          Calendario
        </button>

        <button
          onClick={() => setContenidoActual("aprendiz")}
          className="opciondash"
        >
          <FaCalendarAlt className="iconodash" />
          Aprendiz
        </button>

        <button
          onClick={() => setContenidoActual("planevento")}
          className="opciondash"
        >
          <FaCalendarAlt className="iconodash" />
          Planificar Evento
        </button>

        <button
          onClick={() => setContenidoActual("registro")}
          className="opciondash"
        >
          <FaCalendarAlt className="iconodash" />
          Registro QR
        </button>


        <img src={logo} alt="" />
      </nav>
    </aside>
  );
}
