import React from "react";
import victor from "./img/avatar.png"
import caminata from "./img/caminata.jpg";
import fulbol from "./img/fulbol.webp";

export default function HomeDash() {
  return (
    <main className="contenedor1dash">
      <header className="bienvenidadash">
        <h1>Bienvenido, Jhon Pecados</h1>
        
        <img src={victor} alt="Foto de usuario" className="fotodash" />
      </header>

      <section className="informaciondash">
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

      <article className="tarjetadash">
        <img src={caminata} alt="Imagen actividad 1" className="imagendash" />
        
        <h3>Caminata al Cerro</h3>
        
        <p>Únete a la caminata y disfruta de la naturaleza.</p>
        
        <button className="botondash">Participar</button>
      </article>

      <article className="tarjetadash">
        <img src={fulbol} alt="Imagen actividad 2" className="imagendash" />
        
        <h3>Torneo de Fútbol</h3>
        
        <p>Forma tu equipo y compite en el gran torneo.</p>
        
        <button className="botondash">Inscribirse</button>
      </article>
    </main>
  );
}
