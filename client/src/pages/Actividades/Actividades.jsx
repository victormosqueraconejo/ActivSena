import React from 'react';
import './styles/Actividades.css';

import fondo1Img from '../Alquiler/img/fondo1.jpg';
import fondo2Img from '../Alquiler/img/fondo2.jpg';
import fondo3Img from '../Alquiler/img/fondo3.jpg';
import fondo4Img from '../Alquiler/img/fondo4.jpg';
import fondo5Img from '../Alquiler/img/fondo5.jpg';
import fondo6Img from '../Alquiler/img/fondo6.jpg';
import bienestar_aprendizImg from '../Alquiler/img/bienestar_aprendiz.webp';

const imagenes = [fondo1Img, fondo2Img, fondo3Img, fondo4Img, fondo5Img, fondo6Img];

export default function Actividades() {
  return (
    <div className="contenedor-sena">
      <header className="cabecera">
        <h1 className="actividad-parrafo">🎯 Actividades - SENA</h1>
        <p className="descripcion">Explora las actividades semanales pensadas para tu bienestar y formación integral.</p>
      </header>

      <section className="introduccion">
        <h2 className="parrafo">¿Qué hay de Nuevo?</h2>
        <h3 className="agenda">📅 Agenda Semanal</h3>
      </section>

      <main className="galeria-actividades">
        {imagenes.map((img, index) => (
          <article key={index} className="tarjeta">
            <img src={img} alt={`Actividad ${index + 1}`} className="imagen-principal" />
            {(index % 2 === 0) && <span className="nuevo-badge">NUEVO</span>}
            <img src={bienestar_aprendizImg} alt="Logo Bienestar" className="logo-flotante" />
          </article>
        ))}
      </main>
    </div>
  );
}
