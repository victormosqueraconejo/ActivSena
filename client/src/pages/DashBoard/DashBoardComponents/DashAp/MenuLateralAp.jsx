import {
  FaCalendarAlt,
  FaDiscourse,
  FaHome,
  FaTimes,
  FaRegCheckCircle,
  FaRunning,
  FaUserGraduate,
  FaListAlt ,
   FaAddressBook,
  FaStopwatch,

FaGamepad,
 

  FaRegCalendarCheck 
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
          <FaListAlt  className="iconodash" />
          Actividades
        </button>
        <button
          onClick={() => setContenidoActual("aplicacion")}
          className="opciondash"
        >
          <FaRegCalendarCheck  className="iconodash" />
          Eventos
        </button>
        <button
          onClick={() => setContenidoActual("ludicas")}
          className="opciondash"
        >
          <FaRunning className="iconodash" />
          Ludicas
        </button>
        <button
          onClick={() => setContenidoActual("horasl")}
          className="opciondash"
        >
          <FaStopwatch className="iconodash" />
          Horas Ludicas
        </button>
        <button
          onClick={() => setContenidoActual("combinar")}
          className="opciondash"
        >
          <FaDiscourse className="iconodash" />
          Feedback
        </button>
        <button
          onClick={() => setContenidoActual("constanciacr")}
          className="opciondash"
        >
          <FaUserGraduate className="iconodash" />
          Constancia
        </button>
        <button
          onClick={() => setContenidoActual("alquilerap")}
          className="opciondash"
        >
          <FaGamepad   className="iconodash" />
          Juegos y Alquiler
        </button>
        <button
          onClick={() => setContenidoActual("calendario")}
          className="opciondash"
        >
          <FaCalendarAlt className="iconodash" />
          Calendario
        </button>
        <button
          onClick={() => setContenidoActual("cartacontacto")}
          className="opciondash"
          
          >
            
          < FaAddressBook className="iconodash" />
          Contactos
        </button>
        
       
        
        
        <img src={logo} alt=""  />
      </nav>
    </aside>
  );
}
