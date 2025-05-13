// src/App.jsx
import React from 'react';
import Aprendiz from './components/Aprendiz';
import './styles/styles.css';

// Resto de tu código...



const aprendizData = [
  { id: 1, nombre: 'Claudia reyes', horaLudicas: '60 Horas', observaciones: 'Excelente participación.' },
  { id: 2, nombre: 'Claudia reyes', horaLudicas: '20 Horas', observaciones: 'Necesita mejorar su puntualidad.' },
  { id: 3, nombre: 'Claudia reyes', horaLudicas: '90 Horas', observaciones: 'Cumple con los requisitos.' },
  { id: 4, nombre: 'Claudia reyes', horaLudicas: '70 Horas', observaciones: 'Excelente rendimiento.' },
  { id: 5, nombre: 'Claudia reyes', horaLudicas: '90 Horas', observaciones: 'Muy participativa en todas las actividades.' },
];

function AprendizRun() {
  return (
    <div className="container">
      <h1>Listado de Aprendices</h1>
      {aprendizData.map((aprendiz) => (
        <Aprendiz key={aprendiz.id} aprendiz={aprendiz} />
      ))}
    </div>
  );
}

export default AprendizRun;
