import {
  FaCalendarAlt,
  FaDiscourse,
  FaHome,
  FaTimes,
  FaRegCheckCircle,
  FaAlignJustify,
  FaUserGraduate,
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
          onClick={() => setContenidoActual("actividad")}
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
          onClick={() => setContenidoActual("calendario")}
          className="opciondash"
        >
          <FaCalendarAlt className="iconodash" />
          Calendario
        </button>
        <button
          onClick={() => setContenidoActual("registroa")}
          className="opciondash"
        >
          <FaRegCheckCircle className="iconodash" />
          Registro Alquiler
        </button>
        <button
          onClick={() => setContenidoActual("detallea")}
          className="opciondash"
        >
          <FaAlignJustify className="iconodash" />
          Detalle Alquiler
        </button>
        <button
          onClick={() => setContenidoActual("feedback")}
          className="opciondash"
        >
          <FaDiscourse className="iconodash" />
          FeedBack
        </button>
        <button
          onClick={() => setContenidoActual("constancia")}
          className="opciondash"
        >
          <FaUserGraduate className="iconodash" />
          Constancia
        </button>

        <img src={logo} alt="" />
      </nav>
    </aside>
  );
}
