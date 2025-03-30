import { FaBell, FaBars  } from "react-icons/fa";
import React from "react";

import avatar from "../img/avtar.png";

export default function Navbar() {
  return (
    <header className="encabezado">
      <h1 className="titulo"></h1>

      <nav className="acciones">
        <button className="icono">
          <FaBell />
        </button>
        <button>
          <FaBars className="icono" />
        </button>
          
        <section className="usuario">
          <img src={avatar} alt="Usuario" className="avatar" />
          <span className="nombre">Administrador</span>
        </section>
      </nav>
    </header>
  );
}
