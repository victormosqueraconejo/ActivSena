import React from 'react';
import './styles/Actividades.css';

import fondo1Img from '../Alquiler/img/fondo1.jpg';
import fondo2Img from '../Alquiler/img/fondo2.jpg';
import fondo3Img from '../Alquiler/img/fondo3.jpg';
import fondo4Img from '../Alquiler/img/fondo4.jpg';
import fondo5Img from '../Alquiler/img/fondo5.jpg';
import fondo6Img from '../Alquiler/img/fondo6.jpg';

// segunda imagen de sombra 
import bienestar_aprendizImg from '../Alquiler/img/bienestar_aprendiz.webp';

export default function Actividades() {
  return (
    <div className="contenedor-sena">
      <header className='cabecera'>
        <h1>Actividades - SENA</h1>
      </header>
      
      <h1 className='parrafo'>¿Qué hay de Nuevo?</h1>
      <h2 className='agenda'>Agenda semanal</h2>
      
      <main className="galeria-actividades">
        <article className="tarjeta">
          <img src={fondo1Img} alt="Taller SENA" className="imagen-principal" />
          <span className="nuevo-badge">NUEVO</span>
          <img src={bienestar_aprendizImg} alt="Logo" className="logo-flotante" />
        </article>

        <article className="tarjeta">
          <img src={fondo2Img} alt="Taller SENA" className="imagen-principal" />
          <img src={bienestar_aprendizImg} alt="Logo" className="logo-flotante" />
        </article>

        <article className="tarjeta">
          <img src={fondo3Img} alt="Taller SENA" className="imagen-principal" />
          <span className="nuevo-badge">NUEVO</span>
          <img src={bienestar_aprendizImg} alt="Logo" className="logo-flotante" />
        </article>

        <article className="tarjeta">
          <img src={fondo4Img} alt="Taller SENA" className="imagen-principal" />
          <img src={bienestar_aprendizImg} alt="Logo" className="logo-flotante" />
        </article>

        <article className="tarjeta">
          <img src={fondo5Img} alt="Taller SENA" className="imagen-principal" />
          <img src={bienestar_aprendizImg} alt="Logo" className="logo-flotante" />
        </article>

        <article className="tarjeta">
          <img src={fondo6Img} alt="Taller SENA" className="imagen-principal" />
          <img src={bienestar_aprendizImg} alt="Logo" className="logo-flotante" />
        </article>
      </main>
    </div>
  );
}
