import { FaBell, FaBars } from "react-icons/fa";
import React from "react";
import avatar from "../img/avtar.png";

export default function Navbar({ toggleMenu }) {
  return (
    <header className="encabezado">
      <button className="icono" onClick={toggleMenu}>
        <FaBars />
      </button>

      <nav className="acciones">
        <button className="icono">
          <FaBell />
        </button>

        <section className="usuario">
          <img src={avatar} alt="Usuario" className="avatar" />
          <span className="nombre">Administrador</span>
        </section>
      </nav>
    </header>
  );
}
