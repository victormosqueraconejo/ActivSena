import React from 'react';
import './styles/style.css';


import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import img5 from './img/img5.jpg';
import img6 from './img/img6.jpg';



const Aplicacion = () => {
  return (
    <body className="evento-app-body">
      <div className="evento-app-contenedor-principal">
        <main className="evento-app-contenido-principal">
          <header className="evento-app-cabecera">
            <h1 className="evento-app-titulo-principal">Programación - Eventos</h1>
            <button className="evento-app-boton-notificaciones">🔔 Notificaciones</button>
          </header>
          <br />

          <section className="evento-app-seccion-historias">
            <h2 className="evento-app-titulo-seccion">Historias</h2>
            <div className="evento-app-carrusel-historias">
              <div className="evento-app-historia">
                <img src={img1} alt="Historia 1" />
                <p>Día de la Mujer</p>
              </div>
              <div className="evento-app-historia">
                <img src={img2} alt="Historia 2" />
                <p>Reciclaje</p>
              </div>
              <div className="evento-app-historia">
                <img src={img3} alt="Historia 3" />
                <p>Conferencia de Tecnología</p>
              </div>
              <div className="evento-app-historia">
                <img src={img4} alt="Historia 4" />
                <p>Taller de Innovación</p>
              </div>
              <div className="evento-app-historia">
                <img src={img5} alt="Historia 5" />
                <p>Feria de Empleo</p>
              </div>
            </div>
          </section>

          <section className="evento-app-seccion-botones-accion">
            <button className="evento-app-boton-accion">¿Qué piensas hacer hoy?</button>
            <button className="evento-app-boton-accion">Asistir a eventos</button>
            <button className="evento-app-boton-accion">Lúdicas</button>
            <button className="evento-app-boton-accion">Alquiler de elementos</button>
          </section>

          <section className="evento-app-seccion-feed">
            <h2 className="evento-app-titulo-seccion">Feed de Eventos</h2>
            <div className="evento-app-lista-eventos">
              <div className="evento-app-tarjeta-evento">
                <div className="evento-app-cabecera-evento">
                  <img src={img6} alt="Usuario" className="evento-app-foto-usuario" />
                  <div className="evento-app-info-usuario">
                    <p className="evento-app-nombre-usuario">Alex Jhoan</p>
                    <p className="evento-app-fecha-evento">12 de Noviembre, 2024</p>
                  </div>
                </div>
                <div className="evento-app-contenido-evento">
                  <img src={img1} alt="Evento" className="evento-app-foto-evento" />
                  <p className="evento-app-descripcion-evento">Evento de Innovación: Lecciones y visiones.</p>
                </div>
                <div className="evento-app-acciones-evento">
                  <button className="evento-app-boton-me-gusta">👍 Me gusta</button>
                  <button className="evento-app-boton-comentar">Feedback</button>
                </div>
              </div>

              <div className="evento-app-tarjeta-evento">
                <div className="evento-app-cabecera-evento">
                  <img src={img2} alt="Usuario" className="evento-app-foto-usuario" />
                  <div className="evento-app-info-usuario">
                    <p className="evento-app-nombre-usuario">Andres González</p>
                    <p className="evento-app-fecha-evento">2 de Abril, 2024</p>
                  </div>
                </div>
                <div className="evento-app-contenido-evento">
                  <img src={img3} alt="Evento" className="evento-app-foto-evento" />
                  <p className="evento-app-descripcion-evento">Conferencia sobre las últimas tendencias en tecnología e innovación.</p>
                </div>
                <div className="evento-app-acciones-evento">
                  <button className="evento-app-boton-me-gusta">👍 Me gusta</button>
                  <button className="evento-app-boton-comentar">Feedback</button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </body>
  );
};

export default Aplicacion;