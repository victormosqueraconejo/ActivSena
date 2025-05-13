// src/components/Aprendiz.jsx
import React, { useState } from 'react';
import ModalDetalles from './ModalDetalles'; // Modal para ver detalles
import certificadoImg from '../img/certificado.webp';






const Aprendiz = ({ aprendiz }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleVerDetalles = () => {
    setModalOpen(true);
  };

  const handleCerrarModal = () => {
    setModalOpen(false);
  };

  const handleGenerar = () => {
    setMessage('Debe acercarse a bienestar para poder descargar el certificado.');
  };

  return (
    <div className="aprendiz-card">
      <div className="aprendiz-info">
     
      

      <img
          className="certificado-img"
          src={certificadoImg} alt="Certificado"
        />

        <div className="info-text">
          <h3>{aprendiz.nombre}</h3>
          <p><strong>Hora de lúdicas:</strong> {aprendiz.horaLudicas}</p>
          <p><strong>Observaciones:</strong> {aprendiz.observaciones}</p>
        </div>
      </div>

      <div className="aprendiz-actions">
        <button onClick={handleVerDetalles}>Ver Detalles</button>
        <button onClick={handleGenerar}>Generar</button>
      </div>

      {message && <div className="message">{message}</div>}

      {modalOpen && (
        <ModalDetalles
          aprendiz={aprendiz}
          onClose={handleCerrarModal}
        />
      )}
    </div>
  );
};













export default Aprendiz;