// src/components/ConstanciaModal.jsx
import React from 'react';

function ConstanciaModal({ constancia, onClose, onGenerarConstancia, onRechazar }) {
  return (
    <div className="GHmodal">
      <div className="GHmodal-content">
        <h2 className="GHh2">Detalles del Aprendiz</h2>

        <p className="GHparrafo">
          <strong>Nombre:</strong> {constancia.nombre}
        </p>
        <p className="GHparrafo">
          <strong>Hora de Lúdicas:</strong> {constancia.horaLudicas}
        </p>
        <p className="GHparrafo">
          <strong>Observaciones:</strong> {constancia.observaciones || 'No tiene observaciones.'}
        </p>

        <div className="GHmodal-buttons">
          <button className="GHbutton" onClick={() => onGenerarConstancia(constancia.id)}>
            Generar Constancia
          </button>
          <button className="GHbutton GHbutton.rechazar" onClick={() => onRechazar(constancia.id)}>
            Rechazar
          </button>
        </div>

        <button className="GHbutton" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default ConstanciaModal;
