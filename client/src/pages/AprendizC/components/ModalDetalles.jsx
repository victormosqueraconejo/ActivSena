// src/components/ModalDetalles.jsx
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Para mostrar el chulo

const ModalDetalles = ({ aprendiz, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Detalles del Aprendiz</h2>
        <p><strong>Nombre:</strong> {aprendiz.nombre}</p>
        <p><strong>Hora de Lúdicas:</strong> {aprendiz.horaLudicas}</p>
        <p><strong>Observaciones:</strong> {aprendiz.observaciones}</p>
        <div className="ludicas-status">
          <FaCheckCircle color="green" /> <span>3 Lúdicas Cumplidas</span>
        </div>
        <div className="modal-buttons">
          <button onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalDetalles;
