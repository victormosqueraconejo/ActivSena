import {
  FaCalendarAlt,
  FaBookOpen,
  FaClipboardList,
  FaDiscourse,
  FaUserLock,
  FaQrcode,
  FaHome,
  FaTimes,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Activa } from "../code/Activa";
import React from "react";
import logo from "../img/logo.png";

export default function MenuLateral({ menuAbierto, toggleMenu }) {
  return (
    <aside className={`barra ${menuAbierto ? "mostrar" : "ocultar"}`}>
      <section className="Clogo">
        <img src={logo} alt="Logo" className="logo" />
        <h2 className="titulo">Dashboard</h2>

        <button className="icono subir" onClick={toggleMenu}>
          <FaTimes />
        </button>
      </section>

      <nav className="menu">
        <NavLink to="/" className={({ isActive }) => Activa(isActive)}>
          <FaHome className="icono" />
          Inicio
        </NavLink>
        <NavLink to="/Ludicas" className={({ isActive }) => Activa(isActive)}>
          <FaClipboardList className="icono" />
          Lúdicas
        </NavLink>
        <NavLink
          to="/Calendario"
          className={({ isActive }) => Activa(isActive)}
        >
          <FaCalendarAlt className="icono" />
          Calendario
        </NavLink>
        <NavLink
          to="/Asistencia"
          className={({ isActive }) => Activa(isActive)}
        >
          <FaQrcode className="icono" />
          Asistencia
        </NavLink>
        <NavLink to="/FeedBack" className={({ isActive }) => Activa(isActive)}>
          <FaDiscourse className="icono" />
          FeedBack
        </NavLink>
        <NavLink
          to="/Planificacion"
          className={({ isActive }) => Activa(isActive)}
        >
          <FaBookOpen className="icono" />
          Planificación
        </NavLink>
        <NavLink to="/Gestion" className={({ isActive }) => Activa(isActive)}>
          <FaUserLock className="icono" />
          Gestión Permisos
        </NavLink>
        <img src={logo} alt="" />
      </nav>
    </aside>
  );
}
