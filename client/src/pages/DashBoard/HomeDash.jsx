import React from "react";
import avatar from "./img/avtar.png";
import caminata from "./img/caminata.jpg";
import fulbol from "./img/fulbol.webp";

export default function UserDashboard() {
  return (
    <main className="contenedor1">
      <header className="bienvenida">
        <h1>Bienvenido, Jhon Pecados</h1>
        <br />
        <img src={avatar} alt="Foto de usuario" className="foto" />
      </header>

      <section className="informacion">
        <h2>Información del Usuario</h2>
        <br />
        <p>
          <strong>Nombre:</strong> Juan Pérez
        </p>
        <br />
        <p>
          <strong>ID:</strong> 12345
        </p>
        <br />
        <p>
          <strong>Rol:</strong> Administrador
        </p>
      </section>

      <article className="tarjeta">
        <img src={caminata} alt="Imagen actividad 1" className="imagen" />
        <br />
        <h3>Caminata al Cerro</h3>
        <br />
        <p>Únete a la caminata y disfruta de la naturaleza.</p>
        <br />
        <button className="boton">Participar</button>
      </article>

      <article className="tarjeta">
        <img src={fulbol} alt="Imagen actividad 2" className="imagen" />
        <br />
        <h3>Torneo de Fútbol</h3>
        <br />
        <p>Forma tu equipo y compite en el gran torneo.</p>
        <br />
        <button className="boton">Inscribirse</button>
      </article>
    </main>
  );
}
