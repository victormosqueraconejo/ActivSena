import React, { useState } from 'react';
import "/src/pages/DetallesAlquiler/styles/DetallesAlquiler.css"

import futbolImg from './img/futbol.jpg';
import danzaImg from './img/danza.jpg';
import juegosMesaImg from './img/juegos_mesa.jpg';
import voleibolImg from './img/voleibol.webp';
import culturaImg from './img/cultura.jpg';



const DetallesAlquiler = () => {
  const [registrosAlquiler, setRegistrosAlquiler] = useState([
    {
      id: 1,
      nombre: "Balón de voleibol",
      nombreAprendiz: "Juan Pérez",
      fechaEntrega: "2025-03-25",
      fechaDevolucion: "2025-04-25",
      observaciones: "En perfecto estado",
      cumplioConEntrega: true,
      codigo: "ALQ123",
      estado: "En uso"
    },
    {
      id: 2,
      nombre: "Vestido de danza",
      nombreAprendiz: "Ana Gómez",
      fechaEntrega: "2025-03-20",
      fechaDevolucion: "2025-04-20",
      observaciones: "Con algunos detalles en la tela",
      cumplioConEntrega: false,
      codigo: "ALQ124",
      estado: "Pendiente"
    },
    {
      id: 3,
      nombre: "Parques, juegos de mesa",
      nombreAprendiz: "Carlos López",
      fechaEntrega: "2025-03-30",
      fechaDevolucion: "2025-04-30",
      observaciones: "Buen estado, sin daños",
      cumplioConEntrega: true,
      codigo: "ALQ125",
      estado: "En uso"
    },
    {
      id: 4,
      nombre: "Balón de fútbol",
      nombreAprendiz: "Marta Ramírez",
      fechaEntrega: "2025-03-28",
      fechaDevolucion: "2025-04-28",
      observaciones: "Agujero pequeño",
      cumplioConEntrega: false,
      codigo: "ALQ126",
      estado: "Pendiente"
    },
  ]);

  const [searchNombre, setSearchNombre] = useState('');
  const [searchId, setSearchId] = useState('');
  const [searchFechaEntrega, setSearchFechaEntrega] = useState('');
  const [searchFechaDevolucion, setSearchFechaDevolucion] = useState('');

  const filteredRegistros = registrosAlquiler.filter((registro) => {
    return (
      (registro.nombre.toLowerCase().includes(searchNombre.toLowerCase())) &&
      (registro.nombreAprendiz.toLowerCase().includes(searchNombre.toLowerCase())) &&
      (registro.id.toString().includes(searchId)) &&
      (registro.fechaEntrega.includes(searchFechaEntrega)) &&
      (registro.fechaDevolucion.includes(searchFechaDevolucion))
    );
  });

  return (
    <>
    
   
    <div className="detalles-alquiler-container">
 
     

      
   
    <section className="imagenes-estilo">
    <img src={futbolImg} alt="Imagen 1" className="imagen-representativa" />
    <img src={danzaImg} alt="Imagen 2" className="imagen-representativa" />
  <img src={juegosMesaImg} alt="Imagen 3" className="imagen-representativa" />
  <img src={voleibolImg} alt="Imagen 4" className="imagen-representativa" />
  <img src={culturaImg} alt="Imagen 5" className="imagen-representativa" />
  <br />
      </section>
      <br />
      <br />
      <h2 className="titulo">Registros de Alquiler</h2>
      


      {/* Barra de búsqueda estilizada */}
      <div className="search-bar">
        
        <div className="search-fields">
          <input
            type="text"
            className="search-input"
            placeholder="Buscar por Nombre del Elemento"
            value={searchNombre}
            onChange={(e) => setSearchNombre(e.target.value)}
          />
          
          <input
            type="text"
            className="search-input"
            placeholder="Buscar por Código de Alquiler"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
          />
          
          <input
            type="date"
            className="search-input"
            value={searchFechaEntrega}
            onChange={(e) => setSearchFechaEntrega(e.target.value)}
          />
          <input
            type="date"
            className="search-input"
            value={searchFechaDevolucion}
            onChange={(e) => setSearchFechaDevolucion(e.target.value)}
          />
        </div>
        
        <button className="search-button">Buscar</button>
      </div>

      {/* Tabla estilizada */}
      <table className="tabla-alquiler">
        <thead>
          <tr>
            <th>Elemento</th>
            <th>Aprendiz</th>
            <th>Código de Alquiler</th>
            <th>Estado</th>
            <th>Fecha de Entrega</th>
            <th>Fecha de Devolución</th>
            <th>Observaciones</th>
            <th>¿Cumplió con la entrega?</th>
          </tr>
        </thead>
        <tbody>
          {filteredRegistros.length > 0 ? (
            filteredRegistros.map((registro) => (
              <tr key={registro.id}>
                <td>{registro.nombre}</td>
                <td>{registro.nombreAprendiz}</td>
                <td>{registro.codigo}</td>
                <td>{registro.estado}</td>
                <td>{registro.fechaEntrega}</td>
                <td>{registro.fechaDevolucion}</td>
                <td>{registro.observaciones}</td>
                <td className={`cumplio-con-entrega ${registro.cumplioConEntrega ? 'true' : 'false'}`}>
                  {registro.cumplioConEntrega ? 'Sí' : 'No'}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="no-registros">No se encontraron registros que coincidan con la búsqueda.</td>
            </tr>
          )}
        </tbody>
      </table>
   
    </div>
    </>
  );
};

export default DetallesAlquiler;
