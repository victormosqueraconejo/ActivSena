import React from "react";
import avatar from "./img/avtar.png";
import caminata from "./img/caminata.jpg";
import fulbol from "./img/fulbol.webp";

export default function HomeDash() {
  return (
    <main className="contenedor1">
      <header className="bienvenida">
        <h1>Bienvenido, Jhon Pecados</h1>
        
        <img src={avatar} alt="Foto de usuario" className="foto" />
      </header>

      <section className="informacion">
        <h2>Información del Usuario</h2>
        
        <p>
          <strong>Nombre:</strong> Juan Pérez
        </p>
        
        <p>
          <strong>ID:</strong> 12345
        </p>
        
        <p>
          <strong>Rol:</strong> Administrador
        </p>
      </section>

      <article className="tarjeta">
        <img src={caminata} alt="Imagen actividad 1" className="imagen" />
        
        <h3>Caminata al Cerro</h3>
        
        <p>Únete a la caminata y disfruta de la naturaleza.</p>
        
        <button className="boton">Participar</button>
      </article>

      <article className="tarjeta">
        <img src={fulbol} alt="Imagen actividad 2" className="imagen" />
        
        <h3>Torneo de Fútbol</h3>
        
        <p>Forma tu equipo y compite en el gran torneo.</p>
        
        <button className="boton">Inscribirse</button>
      </article>
    </main>
  );
}
