import { FaBell, FaBars } from "react-icons/fa";
import React from "react";
import avatar from "../img/avatar.png";
import Rotar from "../RotatingText/Rotar"

export default function Navbar({ toggleMenu }) {
  return (
    <header className="encabezadodash">
      <button className="iconodashm" onClick={toggleMenu}>
        <FaBars />
        
      </button>
      <Rotar />
   

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
