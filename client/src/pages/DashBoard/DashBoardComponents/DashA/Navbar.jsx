import { FaBell, FaBars } from "react-icons/fa";
import React from "react";
import avatar from "../img/avatar.png";

export default function Navbar({ toggleMenu }) {
  return (
    <header className="encabezadodash">
      <button className="iconodash" onClick={toggleMenu}>
        <FaBars />
      </button>

      <nav className="accionesdash">
        <button className="iconodash">
          <FaBell />
        </button>

        <section className="usuariodash">
          <img src={avatar} alt="Usuariodash" className="avatardash" />
          <span className="nombredash">Administrador</span>
        </section>
      </nav>
    </header>
  );
}
