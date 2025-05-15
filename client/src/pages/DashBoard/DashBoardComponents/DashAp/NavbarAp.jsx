import { FaBell, FaBars } from "react-icons/fa";
import React from "react";
import avatar from "../img/avtar.png";

export default function Navbar({ toggleMenu }) {
  return (
    <header className="encabezadodash">
      <button className="iconodashm" onClick={toggleMenu}>
        <FaBars />
      </button>

      <nav className="accionesdash">
        <button className="iconodash">
          <FaBell />
        </button>

        <section className="usuariodash">
          <img src={avatar} alt="Usuariodash" className="avatardash" />
          <span className="nombredash">Aprendiz</span>
        </section>
      </nav>
    </header>
  );
}
