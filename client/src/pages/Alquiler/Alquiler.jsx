import React, { useState } from 'react';
import "./styles/Alquiler.css";
// Importa las imágenes necesarias
import voleibolImg from './img/voleibol.webp';
import juegosMesaImg from './img/juegos_mesa.jpg';
import danzaImg from './img/danza.jpg';
import futbolImg from './img/futbol.jpg';
import bienestarAprendizImg from './img/bienestar_aprendiz.webp'; // Importa la imagen de bienestar

const AlquilerApp = () => {
  const [elementosDisponibles] = useState([
    { id: 1, nombre: "Balón de voleibol", descripcion: "Balón de voleibol profesional", disponible: true, imagen: voleibolImg },
    { id: 2, nombre: "Parques, juegos de mesa", descripcion: "Diversión para todo público", disponible: true, imagen: juegosMesaImg },
    { id: 3, nombre: "Vestidos de danza", descripcion: "Elegantes vestidos de danza", disponible: false, imagen: danzaImg },
    { id: 4, nombre: "Balón de fútbol", descripcion: "Balón de fútbol de alta calidad", disponible: true, imagen: futbolImg },
  ]);

  const [registroActivo, setRegistroActivo] = useState(false);
  const [elementoSeleccionado, setElementoSeleccionado] = useState(null);

  const activarFormulario = (elemento) => {
    setElementoSeleccionado(elemento);
    setRegistroActivo(true);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    alert("Elemento registrado exitosamente.");
    setRegistroActivo(false);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Alquiler de Elementos</h1>
      </header>

      <section className="elementos-container">
        {elementosDisponibles.map((elemento) => (
          <div
            key={elemento.id}
            className={`elemento ${!elemento.disponible ? 'no-disponible' : ''}`}
            onClick={() => elemento.disponible && activarFormulario(elemento)}
          >
            <img 
              src={elemento.imagen} 
              alt={elemento.nombre} 
              className="imagen-elemento"
            />
            <h3>{elemento.nombre} {!elemento.disponible && "(No disponible)"}</h3>
            <p>{elemento.descripcion}</p>
          </div>
        ))}
      </section>

      {registroActivo && (
        <div className="formulario-container">
          <div className="formulario-content">
            <div className="formulario-izquierda">
              <h2>Detalles del Alquiler</h2>
              <form onSubmit={manejarEnvio}>
                <label>
                  Nombre del Elemento:
                  <input type="text" value={elementoSeleccionado.nombre} readOnly />
                </label>

                <label>
                  Nombre del Aprendiz:
                  <input type="text" placeholder="Ingrese el nombre del aprendiz" required />
                </label>

                <label>
                  Fecha de Entrega:
                  <input type="date" required />
                  <img src={bienestarAprendizImg} alt="Imagen de bienestar" className="bienestar" /> {/* Usando la imagen importada */}
                </label>

                <label>
                  Fecha de Devolución:
                  <input type="date" required />
                </label>

                <label>
                  Observaciones:
                  <textarea placeholder="Detalles adicionales sobre el alquiler" required />
                </label>
                <button type="submit">Registrar Alquiler</button>
              </form>
            </div>

            <div className="formulario-derecha">
              <img 
                src={elementoSeleccionado.imagen} 
                alt="Imagen del elemento seleccionado" 
                className="imagen-elemento-formulario"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlquilerApp;
