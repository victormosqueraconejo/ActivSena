import React from "react";
import {
  FaCalendarAlt,
  FaDiscourse,
  FaHome,
  FaTimes,
  FaRegCalendarCheck,
  FaRunning,
  FaUserGraduate,
  FaListAlt,
  FaAddressBook,
  FaStopwatch,
  FaGamepad,
} from "react-icons/fa";

import logo from "../img/logo.png";
import "../DashAp/GlassIcons/style/GlassIcons.css";

export default function MenuLateral({
  menuAbierto,
  toggleMenu,
  setContenidoActual,
}) {
  const gradientMapping = {
    blue: "linear-gradient(hsl(120, 83.70%, 48.20%), hsl(128, 98.40%, 48.80%))",
    purple: "linear-gradient(hsl(120, 83.70%, 48.20%), hsl(128, 98.40%, 48.80%))",
    red: "linear-gradient(hsl(120, 83.70%, 48.20%), hsl(128, 98.40%, 48.80%))",
    indigo: "linear-gradient(hsl(120, 83.70%, 48.20%), hsl(128, 98.40%, 48.80%))",
    orange: "linear-gradient(hsl(120, 83.70%, 48.20%), hsl(128, 98.40%, 48.80%))",
    green: "linear-gradient(hsl(120, 83.70%, 48.20%), hsl(128, 98.40%, 48.80%))",
  };

  const menuItems = [
    { key: "home", icon: <FaHome />, label: "Inicio", color: "blue" },
    { key: "actividades", icon: <FaListAlt />, label: "Actividades", color: "purple" },
    { key: "aplicacion", icon: <FaRegCalendarCheck />, label: "Eventos", color: "red" },
    { key: "ludicas", icon: <FaRunning />, label: "Lúdicas", color: "indigo" },
    { key: "horasl", icon: <FaStopwatch />, label: "Horas Lúdicas", color: "orange" },
    { key: "combinar", icon: <FaDiscourse />, label: "Feedback", color: "green" },
    { key: "constanciacr", icon: <FaUserGraduate />, label: "Constancia", color: "blue" },
    { key: "alquilerap", icon: <FaGamepad />, label: "Juegos y Alquiler", color: "purple" },
    { key: "calendario", icon: <FaCalendarAlt />, label: "Calendario", color: "red" },
    { key: "cartacontacto", icon: <FaAddressBook />, label: "Contactos", color: "indigo" },
  ];

  const getBackgroundStyle = (color) => ({
    background: gradientMapping[color] || color,
  });

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
        {menuItems.map(({ key, icon, label, color }) => (
          <button
            key={key}
            onClick={() => setContenidoActual(key)}
            className="opciondash icon-btn"
            type="button"
            aria-label={label}
            style={{
              marginTop:"22px",
              display: "flex",
              alignItems: "center",
              gap: "1.rem",
              padding: "0.7rem 0.6rem",
              position: "relative",
            }}
          >
            <span
              className="icon-btn__back"
              style={{
                ...getBackgroundStyle(color),
                width: "1.rem",
                height: "1.rem",
                
                borderRadius: "0.7rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
            <span
              className="icon-btn__front"
              style={{
                position: "absolute",
                width: "0.rem",
                
                height: "1.rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: "1.6rem",
                
              }}
            >
              {icon}
            </span>
            <span
              className="icon-btn__label"
              style={{
                top:"0",
                marginLeft: "5.2rem", 
                fontWeight: "900",
                fontSize: "0.95rem",
                color: "#333",
              }}
            >
              {label}
            </span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
