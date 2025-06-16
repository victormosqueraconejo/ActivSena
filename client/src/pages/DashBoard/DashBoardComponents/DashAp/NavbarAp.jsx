import { FaBell, FaBars } from "react-icons/fa";


import React from "react";
import avatar from "../img/avatar.png";
import Rotar from "../RotatingText/Rotar"


export default function Navbar({ toggleMenu, setContenidoActual }) {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const toggleDropdown = () => {
    setMostrarMenu((prev) => !prev);
  };

  const irAPerfil = () => {
    setContenidoActual("perfil");
    setMostrarMenu(false); // Opcional: cerrar el menú después de ir
  };

  const irConfig = () => {
    setContenidoActual("config");
    setMostrarMenu(false); // Opcional: cerrar el menú después de ir
  };

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
        

        <section className="usuariodash" style={{ position: "relative" }}>
          <img src={avatar} alt="Usuariodash" className="avatardash" />
          <span
            className="nombredash"
            onClick={toggleDropdown}
            style={{ cursor: "pointer" }}
          >
            Aprendiz
          </span>

          {mostrarMenu && (
            <div className="menudesplegabledash">
              <ul>
                <li onClick={irAPerfil}>Perfil</li>
                <li onClick={irConfig}>Configuración</li>
                <li>Cerrar sesión</li>
              </ul>
            </div>
          )}
        </section>
      </nav>
       
    </header>
  );
}
