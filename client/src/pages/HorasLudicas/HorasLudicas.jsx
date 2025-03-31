import React from 'react';
import './style/HorasLudicas.css';

const actividades = [
  { horas: 5, fecha: '2024-08-01', actividad: 'Baloncesto' },
  { horas: 3, fecha: '2024-08-10', actividad: 'Fútbol' },
  { horas: 4, fecha: '2024-08-15', actividad: 'Voleibol' }
];

const totalHoras = actividades.reduce((sum, act) => sum + act.horas, 0);
const objetivo = 80;
const progreso = (totalHoras / objetivo) * 100;

const HorasLudicas = () => {
  return (
    <div className="container">
      <div className="content">
        <h2 className="titulo">Horas Lúdicas Realizadas</h2>
        <div className="activity-list">
          {actividades.map((act, index) => (
            <div key={index} className="activity-item">
              {act.horas} horas - {act.fecha} - {act.actividad}
            </div>
          ))}
        </div>
        <h3 className="subtitle">Resumen de Horas</h3>
        <div className="summary">
          <p>Horas Totales Acumuladas: {totalHoras}</p>
          <p>¡Te falta(n) {objetivo - totalHoras} hora(s) para alcanzar el objetivo de {objetivo} horas!</p>
          <button className="download-button">Descargar Certificado</button>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progreso}%` }}>
              Progreso hacia las {objetivo} horas
            </div>
          </div>
        </div>
        <h4 className="question-title">¿Qué son las horas lúdicas?</h4>
        <div className="description">
          <p>Las horas lúdicas son actividades recreativas y educativas que contribuyen al desarrollo personal y social. Participar en talleres, clases y eventos organizados cuenta como horas lúdicas.</p>
          <p>Estas actividades son importantes para mejorar habilidades, adquirir nuevos conocimientos y fomentar el bienestar general.</p>
        </div>
      </div>
    </div>
  );
};

export default HorasLudicas;
